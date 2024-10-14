import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { SampleComponent } from "@/components/SampleComponent";
import { useState } from "react";
import Folder from "@/components/Folder";


export const SAMPLE_DIRECTORY = {
  name: "movies",
  subDirs: [
    {
      name: "Fantasy",
      subDirs: [
        {
          name: "Magic",
          subDirs: [],
          files: ["Harry Potter.txt"],
        },
        {
          name: "Adventure",
          subDirs: [],
          files: ["Lord of the rings.txt", "Wizard of Oz.txt"],
        },
      ],
      files: ["Fantasy Genre.txt"],
    },
    {
      name: "Action",
      subDirs: [
        {
          name: "Superhero",
          subDirs: [],
          files: ["The Avengers.txt"],
        },
      ],
      files: ["Action Genre.txt"],
    },
    {
      name: "Animation",
      subDirs: [],
      files: ["The Lion King.txt", "Mulan.txt", "Animation Genre.txt"],
    },
    {
      name: "Romance",
      subDirs: [
        {
          name: "Fantasy",
          subDirs: [],
          files: [
            "Twilight.txt",
            "Ghost.txt",
            "Beauty and the Beast.txt",
            "Van Helsing.txt",
            "Underworld.txt",
          ],
        },
        {
          name: "Drama",
          subDirs: [],
          files: ["Fifty Shades of Grey.txt"],
        },
        {
          name: "Sci-Fi",
          subDirs: [],
          files: ["The Time Traveler's Wife.txt"],
        },
      ],
      files: ["Romance Genre.txt"],
    },
    {
      name: "Sci-Fi",
      subDirs: [
        {
          name: "Cyberpunk",
          subDirs: [],
          files: ["Blade Runner.txt", "The Matrix.txt"],
        },
        {
          name: "Horror",
          subDirs: [],
          files: ["Alien.txt"],
        },
        {
          name: "Adventure",
          subDirs: [],
          files: ["Jurassic Park.txt"],
        },
        {
          name: "Family",
          subDirs: [],
          files: ["E.T. the Extra-Terrestrial.txt"],
        },
      ],
      files: ["Sci-Fi Genre.txt"],
    },
  ],
  files: ["about.txt"],
};


export default function Home() {
  const [value, setValue]= useState('Website')

  return (
    <>
      <Head>
        <title>For Interview</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={`${styles.header}`} style={{display:'flex',justifyContent:'space-between', padding:'10px'}}>
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            className={styles.vercelLogo}
            width={100}
            height={24}
            priority
          />
          {value}
          <SampleComponent setValue={setValue}/>
        </div>
        <div>
          <h2>What is Lorem Ipsum?</h2>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>

        <Folder data={SAMPLE_DIRECTORY}/>
      </main>
    </>
  );
}
