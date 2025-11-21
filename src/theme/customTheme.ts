import { createTheme } from "flowbite-react";

const customTheme = createTheme({
  navbar: {
    root: {
      base: "bg-white px-2 py-2.5 sm:px-4 ",
      rounded: {
        on: "rounded",
        off: "",
      },
      bordered: {
        on: "border",
        off: "",
      },
      inner: {
        base: "mx-auto flex flex-wrap items-center justify-between",
        fluid: {
          on: "",
          off: "container",
        },
      },
    },
    brand: {
      base: "flex items-center",
    },
    collapse: {
      base: "w-full lg:block lg:w-auto",
      list: "mt-4 flex flex-col lg:mt-0 lg:flex-row lg:items-center lg:space-x-8 lg:text-sm lg:font-medium",
      hidden: {
        on: "hidden",
        off: "",
      },
    },
    link: {
      base: "block py-2 pl-3 pr-4 lg:p-0",
      active: {
        on: "bg-primary-700 text-white lg:bg-transparent lg:text-primary-700 ",
        off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 lg:border-0 lg:hover:bg-transparent lg:hover:text-primary-700 ",
      },
      disabled: {
        on: "text-gray-400 hover:cursor-not-allowed",
        off: "",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden",
      icon: "h-6 w-6 shrink-0",
      title: "sr-only",
    },
  },
  card: {
    root: {
      base: "flex rounded-xl border border-gray-200 bg-white shadow-[0px_0px_4px_2px_rgba(0,0,0,.1)]",
      children: "flex h-full flex-col justify-center gap-4 p-6",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row",
      },
      href: "hover:bg-gray-100",
    },
    img: {
      base: "h-auto w-64 grid place-self-center",
      horizontal: {
        off: "rounded-t-lg",
        on: "h-32 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg",
      },
    },
  },
  textInput: {
    base: "flex",
    addon:
      "inline-flex items-center rounded-3xl border border-r-0 border-gray-300 px-3 text-sm text-gray-900",
    field: {
      base: "relative w-full",
      icon: {
        base: "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
        svg: "h-5 w-5 text-gray-500",
      },
      rightIcon: {
        base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "h-5 w-5 text-gray-500",
      },
      input: {
        base: "block w-full border focus:outline-none rounded-3xl  focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
        sizes: {
          sm: "p-2 sm:text-xs",
          md: "p-2.5 text-sm",
          lg: "p-4 sm:text-base",
        },
        colors: {
          gray: "focus-visible:ring-cyan-500 border-none focus-visible:ring-1 bg-white shadow-[0_0_1px_1px] shadow-black/20 hover:ring-teal-300 hover:ring-1 rounded-3xl hover:border-cyan-400 focus-visible:border-cyan-400",
          info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500",
          failure:
            "border-red-500 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500",
          warning:
            "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 ",
          success:
            "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 ",
        },
        withRightIcon: {
          on: "pr-10",
          off: "",
        },
        withIcon: {
          on: "pl-10",
          off: "",
        },
        withAddon: {
          on: "rounded-r-lg",
          off: "rounded-lg",
        },
        withShadow: {
          on: "shadow-sm",
          off: "",
        },
      },
    },
  },
  fileInput: {
    base: "block w-full cursor-pointer rounded-2xl border file:-ms-4 file:me-4 file:cursor-pointer file:border-none file:bg-purple-800 file:py-2.5 file:pe-4 file:ps-8 file:text-sm file:font-medium file:leading-[inherit] file:text-white hover:file:bg-gray-700 focus:outline-none focus:ring-1 ",
    sizes: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-lg",
    },
    colors: {
      gray: "border-gray-300 bg-gray-50 text-gray-900 focus:border-primary-500 focus:ring-primary-500 rounded-2xl",
      info: "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 ",
      failure:
        "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 rounded-2xl",
      warning:
        "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 ",
      success:
        "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 ",
    },
  },
});

export default customTheme;
