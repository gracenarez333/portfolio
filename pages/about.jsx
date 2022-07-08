import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About() {
    return (
        <>
            <h1>About</h1>
            <p className={[styles.red, styles.bigFont].join(" ")}>I am a super cool software engineer now and i make super cool stuff</p>
            <div>
                <style jsx>{`
                    .pinkText {
                        color: pink;
                    }
                `}</style>
                <p className="pinkText">I would love to code forevor</p>
            </div>
            {/* loading an image locally */}
            <Image
                src="/pciture.jpeg"
                alt='polar bear'
                width={500}
                height={500}
            />
            <Image
                src="https://placekitten.com/300/300"
                alt="a cute kitty"
                width={500}
                height={500}
            />
        </>
    )
}