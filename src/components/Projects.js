import React,{useState,useCallback,useEffect} from 'react';
import useEmblaCarousel from 'embla-carousel-react';

/* ---------- PROJECT DATA ---------- */
const projects = [
  {
    title: 'AvoSort – Industrial Optical Sorter',
    description:
      'Dual-vision conveyor that classifies avocado seeds with RGB + multispectral imaging and on-device YOLO inference.',
    tech: 'Python · YOLOv8 · Raspberry Pi 5 · Arduino',
    image: '/AVOSORT.jpg',
    moreDetails: [
      'Dual-Vision & Multispectral Pipeline: in-series RGB webcam + Pi NoIR V3 with 5-colour LED strobing.',
      'Parallel Edge-AI: quantised YOLOv8n + YOLOv11m on Pi 5 (ONNX Runtime INT8/FP16) tuned for low latency.',
      'Mechatronic Loop & Power Grid: real-time serial tracking to Arduino Mega; 24 V isolated power bus (700 mA lines).',
    ],
  },  
  {
    title: 'WordPress Website Contract',
    description:
      '1-year freelance project creating and maintaining a responsive B2B website with SEO and custom features.',
    tech: 'WordPress · PHP · Elementor',
    image: '/ShojikiTrading.png',
    link: '#',
  },
  {
    title: 'Smart Trash Segregator',
    description:
      'Arduino-based system that separates wet and dry waste with IR and capacitive sensing.',
    tech: 'Arduino · C++ · IR & Capacitive',
    image: '/JAOBIN.jpg',
    link: '#',
  },
  {
    title: 'Personal Portfolio Website',
    description:
      'This site — built in React to showcase my projects, skills, and ongoing work in frontend and automation.',
    tech: 'React · JavaScript · Framer Motion',
    image: '/Portfolio.png',
    link: '#',
  },
  {
    title: 'Roboflow Object Detection',
    description:
      'Real-time detection system using camera feeds and YOLOv8 for automation and analysis.',
    tech: 'Python · OpenCV · Roboflow · YOLOv8',
    image: '/Roboflow.png',
    link: '#',
  },
];

function Modal({open,onClose,project}){
  useEffect(()=>{const h=e=>e.key==='Escape'&&onClose();if(open)window.addEventListener('keydown',h);return()=>window.removeEventListener('keydown',h);},[open,onClose]);
  if(!open)return null;
  return(
    <div onClick={onClose} style={{position:'fixed',inset:0,background:'rgba(0,0,0,.45)',display:'flex',justifyContent:'center',alignItems:'center',padding:20,zIndex:1000}}>
      <div onClick={e=>e.stopPropagation()} style={{background:'#fff',borderRadius:16,maxWidth:800,width:'100%',maxHeight:'90vh',overflow:'auto',padding:40}}>
        <h2>{project.title}</h2>
        {project.image&&<img src={project.image} alt={project.title} style={{width:'100%',borderRadius:12,margin:'24px 0'}}/>}
        <ul style={{lineHeight:1.8,color:'var(--text-subtle)',paddingLeft:20}}>
          {project.moreDetails.map((d,i)=><li key={i} style={{marginBottom:12}}>{d}</li>)}
        </ul>
        <button className="btn" style={{marginTop:24}} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

/* ---- main section ---- */
export default function Projects(){
  const [emblaRef,emblaApi]=useEmblaCarousel({loop:true,align:'start'});
  const [active,setActive]=useState(null);

  const scrollPrev=useCallback(()=>emblaApi&&emblaApi.scrollPrev(),[emblaApi]);
  const scrollNext=useCallback(()=>emblaApi&&emblaApi.scrollNext(),[emblaApi]);

  const click=(p)=>p.moreDetails?setActive(p)
      :p.link&&p.link!=='#'&&window.open(p.link,'_blank','noopener');

  return(
    <section id="projects" className="section" style={{background:'var(--surface-alt)'}}>
      <div style={{maxWidth:1080,margin:'0 auto'}}>
        <div style={{marginBottom:40}}>
          <h2 style={{fontSize:'2.5rem',marginBottom:8}}>Featured Projects</h2>
          <p style={{color:'var(--text-subtle)',fontSize:'1.1rem'}}>Some of the work I’m most proud of</p>
        </div>

        <div style={{position:'relative'}}>
          <div ref={emblaRef} style={{overflow:'hidden'}}>
            <div style={{display:'flex'}}>
              {projects.map((p,i)=>(
                <div key={i} style={{minWidth:340,maxWidth:380,flexShrink:0,marginRight:24}}>
                  <div className="card">
                    {p.image&&<img src={p.image} alt={p.title} style={{width:'100%',height:220,objectFit:'cover'}}/>}
                    <div style={{padding:28}}>
                      <h3 style={{marginBottom:12,fontSize:'1.25rem'}}>{p.title}</h3>
                      <p style={{color:'var(--text-subtle)',marginBottom:20}}>{p.description}</p>
                      <div style={{fontSize:'.9rem',color:'var(--primary)',marginBottom:24}}>{p.tech}</div>
                      {(p.moreDetails||(p.link&&p.link!=='#'))&&(
                        <button className="btn" style={{fontSize:'.95rem',padding:'10px 24px'}} onClick={()=>click(p)}>
                          {p.moreDetails?'Read Details':'View Project'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button onClick={scrollPrev} className="arrow-btn" style={{position:'absolute',left:-20,top:'45%'}}>←</button>
          <button onClick={scrollNext} className="arrow-btn" style={{position:'absolute',right:-20,top:'45%'}}>→</button>
        </div>
      </div>

      <Modal open={!!active} onClose={()=>setActive(null)} project={active}/>
    </section>
  );
}