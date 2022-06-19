import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import { Container, Main, Splash, Button } from "../../styles/maps";
import React from "react";
import { IMaps } from "../../src/interfaces/maps.interface";
import Router from "next/router";

interface AgentsProps {
  maps: IMaps;
}

interface Params extends ParsedUrlQuery {
  mapsId: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await axios.get<IMaps[]>(`https://valorantapiv1.mocklab.io/maps`);

  const paths = res.data.map((maps) => ({
    params: {
      mapsId: maps.displayName
    }
  }));

  return {
    paths,
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps<AgentsProps, Params> = async (context) => {
  const { mapsId } = context.params!;

  const res = await axios.get<IMaps[]>(`https://valorantapiv1.mocklab.io/maps`);

  const maps = res.data.find((item) => {
    return item.displayName === mapsId;
  });

  if (maps) {
    return {
      props: {
        maps
      }
    };
  }

  return {
    notFound: true
  };
};

const Map: NextPage<AgentsProps> = ({ maps }) => {
  function backToMapsPage() {
    Router.push("/maps");
  }

  return (
    <Container>
      <Main>
        <div className="text">
          <h1>MAP - {maps?.displayName}</h1>
          <div className="resumeMap">
            <Splash src={maps?.splash} alt="" />
            <p>{maps?.description}</p>
            <Splash src={maps?.displayIcon} alt="" />
          </div>
          <h2>CALLOUTS</h2>
          <div className="resumeMap">
            <ul>
              {maps?.callouts.map((callout) => (
                <li key={callout.regionName} className="body18">
                  {callout.regionName}
                </li>
              ))}
            </ul>
            <Button onClick={backToMapsPage}>
              <a className="heading24">SELECT OTHER MAP</a>
            </Button>
          </div>
        </div>
      </Main>
    </Container>
  );
};
export default Map;
