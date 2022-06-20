import "../styles/globals.scss";
import type { AppProps } from "next/app";

// contexts
import { NewsProvider } from "../src/context/newsContext";
import { DataProvider } from "../src/context/dataContext";

// components
import { Layout } from "../src/components/Layout";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <DataProvider>
      <NewsProvider>
        <motion.main
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0
            },
            pageAnimate: {
              opacity: 1
            }
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.main>
      </NewsProvider>
    </DataProvider>
  );
}

export default MyApp;
