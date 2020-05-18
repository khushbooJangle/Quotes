import React from 'react';
import Thoughts from './Thoughts';

class Thoughtss extends React.Component{
    constructor(props){
        super(props);
        this.state =(
            {
                thought:[
                    {name:'-Albert Einstein', statement:'If you want to live happy life, tie it to a goal, not to people or things.'},
                    {name:'-Bill Gates', statement:'Success is a lousy teacher.It seduces smart people into thinking they can\'t loose.' },
                    {name:'-Henry Ford', statement:'Failure is simply the opprtunity to begin again more intelligently.'},
                    {name:'-Abraham Linkoln', statement:'The Best way to predict a future is to create it.'},
                    {name:'-Nelson Mandela', statement:'I never loose.I either win or learn.'},
                    {name:'-Steve Jobs', statement:'You can\'t connect the dots looking forward;you can only connect them looking backward.So you have to trust that the dots will somehow connect in your future.'},
                    {name:'-APJ Abdul Kalam', statement:'It is very easy to defeat someone, but it is vey hard to win someone.'}
                ],
                showThoughts: false,
                showThoughtMessage: 'Show me the Thoughts'

            }
        )
        this.toggleHandler=this.toggleHandler.bind(this);
    }
    toggleHandler(){
        const currentlyShowing= this.state.showThoughts;
        this.setState({showThoughts: !currentlyShowing});

        if(currentlyShowing === true){
            this.setState({showThoughtMessage: 'Show me the Thoughts'})
        }
        else{
            this.setState({showThoughtMessage:'Some Motivational Thoughts'})
        }

    }
    render(){
       let quotes = null;
       if(this.state.showThoughts){
           quotes=(
               <div>
                <Thoughts names={this.state.thought[0].name} statements={this.state.thought[0].statement} />
                <Thoughts names={this.state.thought[1].name} statements={this.state.thought[1].statement} />
                <Thoughts names={this.state.thought[2].name} statements={this.state.thought[2].statement} />
                <Thoughts names={this.state.thought[3].name} statements={this.state.thought[3].statement} />
                <Thoughts names={this.state.thought[4].name} statements={this.state.thought[4].statement} />
                <Thoughts names={this.state.thought[5].name} statements={this.state.thought[5].statement} />
                <Thoughts names={this.state.thought[6].name} statements={this.state.thought[6].statement} />
               </div>
           )
       }
       return (
           <div>
            <button onClick ={this.toggleHandler}>{this.state.showThoughtMessage}</button>
            <p>{quotes}</p>
           </div>
       )
    }
}
export default Thoughtss;