import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    Outlet,
    useParams
} from "react-router-dom";
import './App.css';

const shoes = {
    "nikecourt-air":{
        name:"NikeCourt Air Zoom GP Turbo",
        img:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f30c4703-04e8-40ca-92d8-a509ddd1c851/nikecourt-air-zoom-gp-turbo-hard-court-tennis-shoe-29kGpS.jpg",
    },
    "nike-air":{
        name:"Nike Air Max Plus III",
        img:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7059d927-f94d-43a1-8e84-5016c98d07f0/air-max-plus-iii-shoe-pcRszz.jpg",
    },
    "nike-zoom":{
        name:"Nike Zoom Fly 3",
        img:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/02f027b3-cef8-4414-9160-c8f3ac544cd8/zoom-fly-3-running-shoe-9SdJdh.jpg",
    },
    "nikecourt-air1":{
        name:"NikeCourt Air Zoom GP Turbo",
        img:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/f30c4703-04e8-40ca-92d8-a509ddd1c851/nikecourt-air-zoom-gp-turbo-hard-court-tennis-shoe-29kGpS.jpg",
    },
    "nike-air1":{
        name:"Nike Air Max Plus III",
        img:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/7059d927-f94d-43a1-8e84-5016c98d07f0/air-max-plus-iii-shoe-pcRszz.jpg",
    },
    "nike-zoom1":{
        name:"Nike Zoom Fly 3",
        img:"https://static.nike.com/a/images/c_limit,w_318,f_auto/t_product_v1/02f027b3-cef8-4414-9160-c8f3ac544cd8/zoom-fly-3-running-shoe-9SdJdh.jpg",
    }
}

export default function App() {
    return <Router>
        <nav>
            <Link to="/">Home </Link>
            <Link to="/launch">Launch</Link>
        </nav>

        <Routes>
            <Route path ="/" element={<Home/>} />
            <Route path ="launch" element={<Launch/>} >
                <Route path ="/" element={<LaunchIndex/>}/>
                <Route path =":slug" element={<LaunchShoe/>}/>
            </Route>
            <Route path ="*" element={<NotFound/>}/>

        </Routes>
    </Router>

    function NotFound() {
        return <div>
            <h1>Not Found!</h1>
            <p>Sorry your page is not found!</p>
        </div>
    }

    function Home() {
        return <div>
            <h1>Welcome Home</h1>
        </div>
    }

    function Launch() {
        return <div>
            <h1>Launch</h1>

            <Outlet/>
        </div>
    }

    function LaunchIndex() {
        return <div className="productContainer">
            {Object.entries(shoes).map(([slug, {name, img}]) =>
            <div key={slug}>
                <Link to={`/Launch/${slug}`}>
                    <h2>{name}</h2>
                    <img src = {img} alt={name} />
                </Link>
            </div>
            )}
        </div>
    }

    function LaunchShoe() {
        const { slug } = useParams();
        const shoe = shoes[slug];

        if(!shoe){
            return <h2> Not Found!</h2>
        }

        const {name, img} = shoe;

        return (
            <div>
                <h2>{name}</h2>
                <img src={img} alt={name}/>
            </div>
        );
    }

};