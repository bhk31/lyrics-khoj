import React from "react";
import styles from "./ArtistList.module.css";
import Akon from "../../assets/akon.jpg";
import BackstreetBoys from "../../assets/backstreet-boys.jpg";
import BrunoMars from "../../assets/bruno-mars.jpg";
import Camilla from "../../assets/camilla.jpg";
import DaddyYankee from "../../assets/daddy-yankee.jpg";
import EdSheeran from "../../assets/ed-sheeran.jpg";
import JenniferLopez from "../../assets/jlo.jpg";
import JustinBieber from "../../assets/justin-bieber.jpg";
import JustinTimberlake from "../../assets/justin-timberlake.jpg";
import MileyCirus from "../../assets/miley-cirus.jpg";
import NickJonas from "../../assets/nick-jonas.jpg";
import NicoleScherzinger from "../../assets/nicole-scherzinger.jpg";
import OneDirection from "../../assets/one-direction.jpg";
import Pitbull from "../../assets/pitbull.jpg";
import Priyanka from "../../assets/priyanka.jpg";
import ArtistCard from "../ArtistCard/ArtistCard";

const ArtistList = () => {
  return (
    <div className={styles.artist_container}>
      <ArtistCard image={Akon} alt={"Akon"}>
        Akon
      </ArtistCard>
      <ArtistCard image={BackstreetBoys} alt={"Backstreet Boys"}>
        Backstreet Boys
      </ArtistCard>
      <ArtistCard image={BrunoMars} alt={"Bruno Mars"}>
        Bruno Mars
      </ArtistCard>
      <ArtistCard image={Camilla} alt={"Camilla"}>
        Camilla
      </ArtistCard>
      <ArtistCard image={DaddyYankee} alt={"Daddy Yankee"}>
        Daddy Yankee
      </ArtistCard>
      <ArtistCard image={EdSheeran} alt={"Ed Sheeran"}>
        Ed Sheeran
      </ArtistCard>
      <ArtistCard image={JenniferLopez} alt={"Jennifer Lopez"}>
        Jennifer Lopez
      </ArtistCard>
      <ArtistCard image={JustinBieber} alt={"Justin Bieber"}>
        Justin Bieber
      </ArtistCard>
      <ArtistCard image={JustinTimberlake} alt={"Justin Timberlake"}>
        Justin Timberlake
      </ArtistCard>
      <ArtistCard image={MileyCirus} alt={"Miley Cyrus"}>
        Miley Cyrus
      </ArtistCard>
      <ArtistCard image={NickJonas} alt={"Nick Jonas"}>
        Nick Jonas
      </ArtistCard>
      <ArtistCard image={NicoleScherzinger} alt={"Nicole Scherzinger"}>
        Nicole Scherzinger
      </ArtistCard>
      <ArtistCard image={OneDirection} alt={"One Direction"}>
        One Direction
      </ArtistCard>
      <ArtistCard image={Pitbull} alt={"Pitbull"}>
        Pitbull
      </ArtistCard>
      <ArtistCard image={Priyanka} alt={"Priyanka"}>
        {" "}
        Priyanka{" "}
      </ArtistCard>
    </div>
  );
};

export default ArtistList;
