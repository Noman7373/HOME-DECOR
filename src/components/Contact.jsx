import contactImg from "../assets/contacty.svg";

const Contact = () => {
  return (
    <div className="py-[40px] m-0 pt-[130px] px-6 bg-slate-100">
      <div className="grid grid-cols-1 gap-[50px] md:grid-cols-2 place-items-center">
        <div className="flex flex-col gap-4 w-full">
          <h1 className="uppercase font-bold text-slate-900 text-[20px]">
            Contact Us
          </h1>
          <p className="text-slate-700 text-[-15px] md:text-[20px]">
            Send us messsage via the form below
          </p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 outline-none w-full rounded text-[18px] placeholder:text-[15px]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 outline-none w-full rounded text-[18px] placeholder:text-[15px]"
            />
            <textarea
              name="msg"
              id="msg"
              cols={5}
              rows={5}
              className="outline-none px-2 py-2 rounded"
              placeholder="Write Your Message"
            ></textarea>
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white rounded font-semibold max-w-[150px]"
            >
              Send message
            </button>
          </form>
        </div>
        <div className="md:w-[450px] sm:w-[300px] xs:w-[250px]">
          <img src={contactImg} alt="contactImage" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
