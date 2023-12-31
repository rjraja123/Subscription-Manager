import './Chartbar.css'
const Chartbar=(props)=>{
    let barHeight='0%'
    if(props.maxValue>0){
       barHeight=Math.round((props.value/props.maxValue)*100)+'%'
    }
    return (
        <div className='chart-bar'>
            <div className="chart-bar_inner">
               <div className="chart-bar_fill" style={{'height':barHeight}}>
                </div> 
            </div>
            <div className="chart-bar_label">{props.label}</div>
        </div>
    )
}
export default Chartbar