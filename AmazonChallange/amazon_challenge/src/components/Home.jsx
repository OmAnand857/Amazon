import React from "react";
import "./style/homeStyles.css";
import Product from "./Product";

function Home(props){

    
    return (
        <div className="home">
      
        <div className="home_container">
            
                        <img className="home_image" src="https://m.media-amazon.com/images/I/61HHa0VUuaL._SX3000_.jpg" alt="Valentines Banner"></img>
            

            <div className="home_rows">
                <Product
                    title="MuscleBlaze Raw Whey Protein Concentrate 80% with Added Digestive Enzymes (Unflavoured, 1 kg / 2.2 lb)"
                    rating={4}
                    price={1799}
                    id={1}
                    image="https://m.media-amazon.com/images/I/61pFtNVCbUL._SX679_.jpg"
                   
                />
                <Product
                    title="Wild Stone Ultra Sensual Long Lasting Perfume for Men, 100ml, A Sensory Treat for Casual Encounters, Aromatic Blend of Masculine Fragrances"
                    rating={4}
                    id={2}
                    price={299}
                    image="https://m.media-amazon.com/images/I/51M73SOIdhL._SX522_.jpg"
                    
                />
            </div>
            <div className="home_rows">
            <Product
                title="Titan Analog Rose Gold Dial Men's Watch-90148KD03/NR90148KD03"
                rating={2}
                price={13296}
                id={3}
                image="https://m.media-amazon.com/images/I/517XvKSRvCL._AC_UL480_FMwebp_QL65_.jpg"
                
            />
            <Product
                title="Titan Analog Rose Gold Dial Men's Watch-90148KD03/NR90148KD03"
                rating={2}
                id={4}
                price={13296}
                image="https://m.media-amazon.com/images/I/517XvKSRvCL._AC_UL480_FMwebp_QL65_.jpg"
                
            />
            <Product
                title="Titan Analog Rose Gold Dial Men's Watch-90148KD03/NR90148KD03"
                rating={2}
                id={5}
                price={13296}
                image="https://m.media-amazon.com/images/I/517XvKSRvCL._AC_UL480_FMwebp_QL65_.jpg"
                
            />
            </div>
            <div className="home_rows">
            <Product
                title="Titan Analog Rose Gold Dial Men's Watch-90148KD03/NR90148KD03"
                rating={2}
                id={6}
                price={13296}
                image="https://m.media-amazon.com/images/I/517XvKSRvCL._AC_UL480_FMwebp_QL65_.jpg"
               
            />
            </div>
            </div>
        </div>
    );
};


export default Home;