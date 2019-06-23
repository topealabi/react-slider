import React, {Component} from 'react';
import Slide from '../Slide/Slide';
import LeftArrow from '../LeftArrow/LeftArrow';
import RightArrow from '../RightArrow/RightArrow';
import Search from '../SearchBar/Search';
import Unsplash, { toJson }  from 'unsplash-js';
import styles from './Slider.module.css';


// require syntax


const unsplash = new Unsplash({
  applicationId: "92fd3c07896c575a84a389088c24c172b56faedc64834138e4a4d34dd89fd59c",
  secret: "cbd62b5d41ba4090e3a2acbf75f42b471ea88df12d03c177a64e839fc87a16ba"
});


export default class Slider extends Component {
    constructor(props){
        super(props);

        this.state = {

            images: [
                
            ],
            currentIndex: 0,
            translateValue: 0,
            isLoading: false
        }
    }

    componentWillMount(){

        this.newImages("dog")

    }

    newImages = (searchTerm) => {
      
        this.setState({isLoading: true})
        unsplash.search.photos(searchTerm, 1)
            .then(toJson)
            .then(json => {
                // Your code
                let temp_images = []
                for(var i=0; i < json.results.length; i++) {
                    temp_images.push(json.results[i].urls.small) //link
                }
                this.setState({images: temp_images})
        })
        .then(complete => {
            this.setState({isLoading: false})
        });

    }

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0) {
            return this.setState({
                currentIndex: this.state.images.length -1,
                translateValue: -(this.slideWidth()*(this.state.images.length -1))
            })
        }

        this.setState(prevState => ({
            currentIndex: prevState.currentIndex - 1,
            translateValue: prevState.translateValue + (this.slideWidth())
        }));

    }

    goToNextSlide = () => {

        if (this.state.currentIndex === this.state.images.length -1) {
            return this.setState({
                currentIndex: 0,
                translateValue: 0
            })
        }
        
        this.setState(prevState => ({
            currentIndex: prevState.currentIndex + 1,
            translateValue: prevState.translateValue + -(this.slideWidth())
        }));
    }

    slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    render() {
        return(

            <div className={styles.slider}
                
            >
                <div className={styles.search} >
                    <Search newImages={this.newImages}/>
                </div>

                <div className={styles.loadingItem} >
                <i className="fas fa-sync fa-spin" style={{visibility: `${this.state.isLoading ? 'visible' : 'hidden'  }`}}></i>
                </div>
                
                <LeftArrow goToPrevSlide={this.goToPrevSlide}  />
                <RightArrow goToNextSlide={this.goToNextSlide} />
                <div className="sliderWrapper"
                    style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        transform: `translateX(${this.state.translateValue}px)`,
                        transition: 'transform ease-out 0.45s'
                    }}>
                    {
                        this.state.images.map((image, i) =>(
                        <Slide key={i} image={image} />
                        ))
                    }
                </div>




            </div>
        )
    }
}

