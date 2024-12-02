import React from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import EditorToolbarButton from "./EditorToolbarButton";
import TextEditor from "./TextEditor";
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';

export const Editor = ({ placeholder }: { placeholder: string }) => {
  const extensions = [
    StarterKit.configure({
      italic: {
        HTMLAttributes: {
          class: "italic",
        },
      },
      heading: {
        levels: [1, 2],
        HTMLAttributes: (level:number) => {
          switch (level) {
            case 1:
              return { class: "text-2xl font-bold" };
            case 2:
              return { class: "text-xl font-semibold" };
            default:
              return {};
          }
        },
      },
    }),
	Link.configure({
		protocols:['mailto'],
		HTMLAttributes:{
			class:'text-blue-500 hover:text-blue-700'
		}
	}),
	Underline.configure({
		HTMLAttributes:{
			class:'underline'
		}
	}),
    Placeholder.configure({
      placeholder: placeholder,
    }),
  ];
  const content = ``;
  const editor = useEditor({
    extensions,
    content,
  });
  return (
    <div className="h-full flex flex-col mb-5 gap-3">
      <EditorToolbarButton editor={editor} />
      <TextEditor editor={editor} />
    </div>
  );
};
