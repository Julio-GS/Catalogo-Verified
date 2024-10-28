const Button = () => {
  return (
    <div>
      <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-white font-medium">
        <div class="inline-flex h-12 translate-y-0 items-center justify-center px-6 text-neutral-950 transition duration-500 group-hover:-translate-y-[150%]">
          Consultar
        </div>
        <div class="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-neutral-50 transition duration-500 group-hover:translate-y-0">
          <span class="absolute h-full w-full translate-y-full skew-y-12 scale-y-0 bg-[#1b1b1b] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
          <span class="z-10">Consultar</span>
        </div>
      </button>
    </div>
  );
};

export default Button;
