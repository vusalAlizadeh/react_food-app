import React,{useState,useEffect} from 'react';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {

 const [theme,setTheme]=useState("light");
 const [preferredColor,setPreferredColor]=useState(0);
 const [fontSize,setFontSize]=useState(1);
 const [speed,setSpeed]=useState(1);
 const [settings,setSettings]=useState({
    "--background-color": "#fff",
    "--background-light": "#fff",
    "--primary-color": "rgb(255, 0, 86)",
    "--shadow-color": "rgba(0,0,0,0.2)",
    "--text-color": "#0A0A0A",
    "--text-light": "#575757",
    "--font-size": "16px",
    "--animation-speed": 1
})


 useEffect(() => {
    const _root=document.documentElement;
    for(let key in settings){
        _root.style.setProperty(key,settings[key])
    }
 }, [settings])
 
 //array
 const primaryColors = [
    "rgb(255, 0, 86)",
    "rgb(33, 150, 243)",
    "rgb(255, 193, 7)",
    "rgb(0, 200, 83)",
    "rgb(156, 39, 176)"
];
const themes = [
    {
        "--background-color": "#fff",
        "--background-light": "#fff",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#0A0A0A",
        "--text-light": "#575757"
    },
    {
        "--background-color": "rgb(29, 29, 29)",
        "--background-light": "rgb(77, 77, 77)",
        "--shadow-color": "rgba(0,0,0,0.2)",
        "--text-color": "#ffffff",
        "--text-light": "#eceaea",
    }
];

const fontSizes = [
    {
        title: "Small",
        value: "12px"
    },
    {
        title: "Medium",
        value: "16px"
    },
    {
        title: "Large",
        value: "20px"
    }
];

const animationSpeeds = [
    {
          title: "Slow",
          value: 2
    },
    {
          title: "Medium",
          value: 1
    },
    {
          title: "Fast",
          value: .5
    }
]


// functions
  const ChangeTheme=(i)=>{
    setTheme(i===0 ? "light":"dark")
    const _theme=themes[i]
    const _settings={...settings}

    for(let key in _theme){
        _settings[key]=_theme[key]
    }
    setSettings(_settings)
  };

  const ChangeColor=(i)=>{
      const _color=primaryColors[i]
      let _settings={...settings}
      _settings["--primary-color"]=_color
      setPreferredColor(i)
      setSettings(_settings)
  };

  const ChangeFontSize=(i)=>{
      const _size=fontSizes[i]
      let _settings={...settings}
      _settings["--font-size"]=_size.value
      setFontSize(i)
      setSettings(_settings)
  };

  const ChangeAnimationSpeed=(i)=>{
    const _speed=animationSpeeds[i]
    let _settings={...settings}
    _settings["--animation-speed"]=_speed.value
    setSpeed(i)
    setSettings(_settings)
}
  return (
    <>
    <Navbar/>
    <div className='setting-section'>
        <div className="container">
            <h2 className='container-title'>Primary Theme</h2>
            <div className="option-container">
             <div className='option light' onClick={()=>ChangeTheme(0)}>
                 {theme === "light" && <div className="check">
                     <FontAwesomeIcon icon={faCheck}/>
                 </div>}
             </div>
             <div className='option dark' onClick={()=>ChangeTheme(1)}>
                 {theme === "dark" && <div className="check">
                 <FontAwesomeIcon icon={faCheck}/>
                </div>}
             </div>
            </div>
        </div>

        <div className="container">
            <h2 className='container-title'>Preferred color</h2>
            <div className="option-container">
            {primaryColors.map((item,index)=>(
                 <div className='option' key={index} style={{backgroundColor:item}} onClick={()=>ChangeColor(index)}>
                  {preferredColor === index && <div className="check">
                     <FontAwesomeIcon icon={faCheck}/>
                 </div>}
                </div>
            ))}
            </div>
        </div>


        <div className="container">
            <h2 className='container-title'>Font size</h2>
            <div className="option-container">
            {fontSizes.map((item,index)=>(

                <button key={index} className="btn" onClick={()=>ChangeFontSize(index)}>{item.title}
                {fontSize === index &&<span><FontAwesomeIcon icon={faCheck}/></span> }
                </button>
            ))}
            </div>
        </div>

        <div className="container">
            <h2 className='container-title'>Animation speed</h2>
            <div className="option-container">
            {animationSpeeds.map((item,index)=>(

                <button key={index} className="btn" onClick={()=>ChangeAnimationSpeed(index)}>{item.title}
                {speed === index && <span><FontAwesomeIcon icon={faCheck}/></span> }
                </button>
            ))}
            </div>
        </div>
    </div>
    <FooterSection/>
    </>
  )
}

export default Settings;