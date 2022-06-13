import "../styles/globals.scss";
import type { AppProps } from "next/app";

// contexts
// import { AuthProvider } from "../src/context/auth";

// components
import { Layout } from "../src/components/Layout";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    // <AuthProvider>
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
    //  </AuthProvider>
  );
}

export default MyApp;
