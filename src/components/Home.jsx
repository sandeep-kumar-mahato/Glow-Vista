import "./style.css"
import bgimg from "../assets/bg.svg"

const Home = () => {
  return (
    <div className="bg-[#ffffff]">
        <div className="main_div">
        
        <div id="text_sec"  >
          <section className="sec1 lg:text-5xl text-xl text-[#45d5e2]"><h3><b>Empowering <u>Better Health</u></b></h3></section>
          <section className="sec2 lg:text-3xl text-md font-semibold text-[#f5efed]"><h4><i>Inspiring Wellness, One Step at a Time</i></h4></section>
          <section className="sec3 lg:text-xl text-sm"><p>
          Glowvista Instruments Pvt. Ltd. develops innovative smart biomedical technologies, focusing on cost-effective point-of-care devices. Led by Dr. Earu Banoth, with Dr. Bala Chakravarthy and Dr. Puneet Jain as co-founders,  our flagship project is an AI-enabled handheld malaria screening device. We aim to enhance diagnostic accuracy and improve global health outcomes.</p></section>
          <button className="bg-[#0E8C98] hover:bg-[#1f5e64] text-white py-4 px-6 rounded-lg">
              Download Catalog
            </button>
            
        </div>
        <div id="pic_sec">
          <img src={bgimg} alt="img" className="lg:w-screen w-1/2 m-auto" />
        </div>
        </div>
        <div id="meta_data">
          <div id="notice">
            <p><marquee direction="">NOTICE:- Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima tenetur ab, veniam eius quasi error deserunt, doloremque dolore architecto perferendis inventore molestiae ut, unde aliquam.</marquee></p>
          </div>
        </div>
    </div>
  );
};

export default Home;
