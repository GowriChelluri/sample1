import {Component} from "react"
import "./index.css"
class LightDarkMode extends Component{
    state:{isDarkMode:true}
    onChangeMode= ()=>{
      const {isDarkMode}=this.state
      this.setSate({isDarkMode:!isDarkMode})
    }
   
    render(){
        const {isDarkMode}=this.state
        let modeClass
        const modeText=isDarkMode?((modeClass="dark-mode"),'Light Mode'):((modeClass="light-mode"),"Dark Mode")
        return(
            <div className="bg-container">
                <div className={modeClass}>
                    <h1 className="main-heading">Click to change mode</h1>
                    <button className={btn} onClick={this.onChangeMode>{modeText}</button>
                </div>
            </div>
        )
    }

}
export default LightDarkMode
