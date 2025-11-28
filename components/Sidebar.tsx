// components/Sidebar.tsx
"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSidebar } from "@/context/SidebarContext";
import { sidebarSections } from "@/lib/sidebarData";

export default function Sidebar() {
  const {
    isOpen,
    close,
    selectedSection,
    setSelectedSection,
    selectedItem,
    setSelectedItem,
  } = useSidebar();

  // Fallback to first section if none selected
  const currentSection =
    sidebarSections.find((s) => s.title === selectedSection) ??
    sidebarSections[0];

  return (
    <>
      {/* Background overlay */}
      <div
        onClick={close}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-50 transition-opacity duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

    <div
    className={`
        fixed top-6 z-[200] transition-all duration-300
        ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}
    `}
    style={{
        left: "calc(clamp(350px,80%,800px) + 12px)",
    }}
    >
    <button
        onClick={close}
        className="
        p-2 
        rounded-full 
        bg-white 
        shadow-lg 
        hover:bg-gray-100 
        transition
        "
    >
        <XMarkIcon className="h-6 w-6 text-gray-700" />
    </button>
    </div>


      {/* Sliding sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg p-0 transition-transform duration-300
        w-[clamp(350px,80%,800px)] z-60
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex h-full">
          {/* LEFT: sections + options */}
          <div className="w-[35%] border-r p-4 overflow-y-auto">
            {/* Header + close */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Menu</h2>
            </div>

            {/* Sections */}
            {sidebarSections.map((section) => (
              <div key={section.title} className="mb-6">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                  {section.title}
                </h3>

                <ul className="flex flex-col">
                  {section.items.map((item) => (
                    <li
                      key={item.key}
                      onClick={() => {
                        setSelectedSection(section.title);
                        setSelectedItem(item.key);
                      }}
                      className={`py-2 px-1 flex justify-between items-center cursor-pointer
                        hover:text-black
                        ${
                          selectedItem === item.key
                            ? "text-black font-medium"
                            : "text-gray-700"
                        }`}
                    >
                      {item.label}

                      {/* Arrow only if item is NOT a direct link */}
                      {!item.link && (
                        <span className="text-gray-400">›</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT: section content (images-only OR text-only) */}
          <div className="w-[65%] p-4 overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">
              {selectedItem || "Select an option"}
            </h2>

            {/* IMAGE-type section */}
            {currentSection.type === "images" && (
              <div className="grid grid-cols-1 gap-4">
                <div className="h-32 bg-gray-200 rounded-md flex items-center justify-center">
                  {selectedItem} Image 1
                </div>
                <div className="h-32 bg-gray-200 rounded-md flex items-center justify-center">
                  {selectedItem} Image 2
                </div>
                <div className="h-32 bg-gray-200 rounded-md flex items-center justify-center">
                  {selectedItem} Image 3
                </div>
              </div>
            )}

            {/* TEXT-type section */}
            {currentSection.type === "text" && (
              <div className="flex flex-col gap-4 text-gray-700">
                <p>Details for: {selectedItem}</p>
                <p>
                  This panel is text-only for this section — you can turn these
                  into descriptions, links, or lists.
                </p>
                <p>
                  Later we’ll plug in real content depending on the selected
                  item.
                </p>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
