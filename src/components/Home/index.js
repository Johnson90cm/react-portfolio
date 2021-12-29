import React, { useState } from "react";
import { useTrail, animated as a } from "react-spring";
import "./styles.css";

const greeting = ["Have No", " Fear Of", "Perfection", "You Will", "Never Reach It", " ", "- Salvador Dali", ];
const config = { mass: 12, tension: 1500, friction: 300 };

function Home() {
    const [toggle, set] = useState(true);

    const trail = useTrail(greeting.length, {
        config,
        opacity: toggle ? 1 : 0,
        x: toggle ? 0 : 20,
        height: toggle ? 80 : 0,
        from: { opacity: 0, x: 20, height: 0 }
    });

    return (
        <div>
            <div className="full-page flex-row center vertical-center">
                <div className="trails-main flex-row space-between" onClick={() => set(state => !state)}>
                    <div>
                        {trail.map(({ x, height, ...rest }, index) => (
                            <a.div
                                key={greeting[index]}
                                className="trails-text"
                                style={{
                                    ...rest,
                                    transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
                                }}
                            >
                                <a.div style={{ height }}>{greeting[index]}</a.div>
                            </a.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home