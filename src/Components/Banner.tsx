import BannerImage from "../assets/banner-main.png"

const Banner = () => {
    return (

        <div className="py-20 rounded-3xl bg-[linear-gradient(to_top_right,#818cf8_0%,#151515_40%,#151515_65%,#fda4af_100%)] flex items-center flex-col gap-5 justify-center p-5 text-center container mx-auto mt-5">
            <div>
                <img src={BannerImage} alt="banner" />
            </div>
            <div>
                <h1 className="text-4xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <p className="text-2xl text-slate-400">Beyond Boundaries Beyond Limits</p>
                <div className="flex justify-center py-6">
                    <div className="rounded-2xl border border-[#cfff00] bg-transparent p-1.5">
                        <button
                            className=" rounded-xl border border-[#b9d900] bg-[#dfff00] px-5 py-2.5 text-sm font-bold text-black">
                            Claim Free Credit
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;