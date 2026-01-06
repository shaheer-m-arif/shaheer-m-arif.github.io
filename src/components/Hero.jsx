import React, { useEffect, useRef, useState } from 'react'
//import { startAurora } from '../lib/aurora'

// scramble helper for the role word
function scramble(el, nextText, duration = 600){
  const glyphs = "@#$%&*+=-?/<>"
  const from = el.textContent
  const len = Math.max(from.length, nextText.length)
  let start = null
  function step(ts){
    if(!start) start = ts
    const p = Math.min(1, (ts - start)/duration)
    let out = ''
    for(let i=0;i<len;i++){
      // during first half, show glyph noise; then reveal target
      const threshold = i/len * 0.7
      out += (p < threshold) ? glyphs[Math.floor(Math.random()*glyphs.length)] : (nextText[i] || '')
    }
    el.textContent = out
    if(p < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function Hero(){
  const nameRef = useRef(null)

  // Reactive letters (magnetic hover)
  useEffect(()=>{
    const wrap = nameRef.current
    const text = wrap.textContent.trim()
    wrap.textContent = ''
    const letters = [...text].map(ch=>{
      const s = document.createElement('span')
      s.className = 'letter'
      s.textContent = ch
      wrap.appendChild(s)
      return s
    })
    const strength = 18
    const onMove = (e)=>{
      const r = wrap.getBoundingClientRect()
      letters.forEach((L,i)=>{
        const cx = r.left + (i+0.5)*(r.width/letters.length)
        const cy = r.top + r.height/2
        const dx = (e.clientX - cx)/r.width
        const dy = (e.clientY - cy)/r.height
        L.style.transform = `translate(${dx*strength}px, ${dy*strength}px)`
      })
    }
    const reset = ()=>letters.forEach(L=>L.style.transform='')
    wrap.addEventListener('mousemove', onMove)
    wrap.addEventListener('mouseleave', reset)
    return ()=>{ wrap.removeEventListener('mousemove', onMove); wrap.removeEventListener('mouseleave', reset) }
  },[])


  // Rotating role with correct article + glitch transition
  const [role, setRole] = useState('Student')
  const [article, setArticle] = useState('a')
  useEffect(()=>{
    const roles = ['Student','Developer','Engineer']
    const pick = w => /^[AEIOU]/i.test(w) ? 'an' : 'a'
    const el = document.getElementById('role')
    let i = 0
    setArticle(pick(roles[i]))
    const id = setInterval(()=>{
      i = (i+1) % roles.length
      const next = roles[i]
      setRole(next)
      setArticle(pick(next))
      if(el) scramble(el, next)
    }, 1600)
    return ()=>clearInterval(id)
  },[])

  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="kicker">Hey! I am</div>
        <h1 className="title">
          <span ref={nameRef} className="letters">SHAHEER&nbsp;ARIF</span>
        </h1>
        <div className="subtitle">
          I am {article} <span id="role">{role}</span>.
        </div>
      </div>
    </section>
  )
}