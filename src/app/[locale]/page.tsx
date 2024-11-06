import Cards from "@/components/cards";
import Footer from "@/components/footer";
import Main from "@/components/main";
import PlayStore from "@/components/playStore";

export default function Home() {
  return (
    <div>
      <Main />
      <Cards />
      <div className="w-[90%] m-auto py-[96px]">
        <PlayStore />
      </div>
      <Footer />
    </div>
  );
}
