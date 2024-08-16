import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state={
            // count:0 ,
            // count2:1 
            userInfo:{
                login:"",
                id:"",
                avatar_url:""

            }           /*state */
        }
        //console.log(props)
        //console.log(this.props.name + " 1st child constrcture")
    }
    async componentDidMount(){
       // console.log(this.props.name + "child compoundDIdMount")
       const data = await fetch("https://api.github.com/users/jubairskv")
       const json = await data.json()
       //console.log(json)
       this.setState({
        userInfo:json
       })

       this.timer = setInterval(()=>{
        //console.log("jubair")
    },1000)
    }
    componentDidUpdate(prevProps,prevState){  //how you pass dependdencies in class component
        //componetDidUpdate called each render like useEffect
        if(this.state.count!==prevState.count){

        }
        if(this.state.count2!==prevState.count2){

        }
        //console.log("componentDidDpdate")
    }
    componentWillUnmount(){
        clearInterval(this.timer)
        //console.log("ComponentWillUnmount")
    }
    render() {
        //console.log(this.props .name + " 1st child render")
        //const {name} = this.props ; 
       // const {count,count2} = this.state
       const {id,avatar_url} = this.state.userInfo
        return(
            <div className="user">
            {/* <h1>count:{count} </h1>
            <h1>count:{count2} </h1>
            <button onClick={()=>{
                this.setState(
                    //never update state variable directly this.state.count=count++
                    {
                      count:this.state.count+1 ,
                      count2:this.state.count2+1 
                    }
                )
            }}>
                Count increase</button>
             <h2>Name:{this .props.name}</h2>  /*Name:{name}  */}
            <h3>Location:{this.state.userInfo.login}</h3>
            <h4>Contact:{id}</h4>
           <img src={avatar_url}/>
        </div>
        ); 
    }  
}

export default UserClass