import { HomeComponent } from '@/components/Home';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout maxWidth="sm">
      <HomeComponent />
    </Layout>
  );
}

export const getStaticProps = async () => {
  return { props: {} };
};
