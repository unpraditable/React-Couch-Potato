//this component is to render the detail of information of an actor/actress, mainly about biodata

import React, {Component} from 'react'; 
import axios from 'axios';

class ActorInfo extends Component {
    state = {
        actorInfos: {},
    }

    componentDidMount() {
        const actor_id = this.props.actor_id;
        const api_key= "f4405389d2c4c04e87e2a7b8edff703b";

        //get the movie info via AJAX with axios
        axios.get(`https://api.themoviedb.org/3/person/${actor_id}?api_key=${api_key}&language=en-US`)
            .then(res => {
                const infos = res.data;
                this.setState({ actorInfos: infos  });

                console.log(this.state.actorInfos)
            })
        
    }

    render() {
        let birthdayDate = (new Date(this.state.actorInfos.birthday)).toLocaleDateString();

        return (
        <div>
            <h1>{this.state.actorInfos.name}</h1>

            <section className="row">
                <div className="col-sm-3">
                    <img src={`https://image.tmdb.org/t/p/w300${this.state.actorInfos.profile_path}`} className="img-fluid" />

                </div>
                <div className="col-sm-9">
                <h2>Biodata</h2>
                    <p><b>Place of Birth: </b></p>
                    <p>{this.state.actorInfos.place_of_birth}</p>
                    <p><b>Date of Birth: </b></p>
                    <p>{birthdayDate}</p>

                    <h2>Biography</h2>
                    <p>{this.state.actorInfos.biography}</p>
                </div>
            </section>
        </div>

        )
    }
}

export default ActorInfo;