import React, { useEffect, useState, useRef } from 'react';

const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !hasAnimated) {
        setHasAnimated(true);
      }
    }, { threshold: 0.5 });

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    let start = 0;
    const end = parseInt(target);
    const increment = end / (duration / 20);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [hasAnimated, target, duration]);

  return <span ref={elementRef}>{count}</span>;
};

const Stats = () => (
    <section className="prova-social" style={{ background: 'var(--bg-light)', color: 'var(--text-primary)', borderTop: '1px solid var(--gray-light)' }}>
        <div className="container">
            <div className="section-title">
                <h2>Excelência em Números</h2>
                <p>Nossa trajetória é marcada por olhares transformados e autoestima renovada.</p>
            </div>
            <div className="numeros">
                <div className="numero">
                    <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '4rem', color: 'var(--primary)' }}>
                        <Counter target="200" />+
                    </h3>
                    <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: '500' }}>Unidades</p>
                </div>
                <div className="numero">
                    <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '4rem', color: 'var(--primary)' }}>
                        <Counter target="4" />
                    </h3>
                    <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: '500' }}>Países</p>
                </div>
                <div className="numero">
                    <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '4rem', color: 'var(--primary)' }}>
                        <Counter target="99" />%
                    </h3>
                    <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: '500' }}>De Satisfação</p>
                </div>
                <div className="numero">
                    <h3 style={{ fontFamily: 'var(--font-title)', fontSize: '4rem', color: 'var(--primary)' }}>
                        <Counter target="5000" />+
                    </h3>
                    <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8rem', fontWeight: '500' }}>Transformações</p>
                </div>
            </div>
        </div>
    </section>
);

export default Stats;
