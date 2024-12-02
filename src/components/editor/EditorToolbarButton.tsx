import { FC, useState } from "react";
import {
  List,
  Italic,
  ListOrdered,
  Underline,
  Undo,
  Link2,
  Heading1,
  Heading2,
  Redo,
  Bold,
  LucideScanLine,
} from "lucide-react";
import { FileInput, Label } from "flowbite-react";
import { Editor } from "@tiptap/react";
import LinkModal from "./LinksModal";
import { URL_PATTERN } from "../../helper";

type ToolbarProps = {
  editor: Editor | null;
};

const EditorToolbarButton: FC<ToolbarProps> = ({ editor }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //will update link from user input
  const handleLinkSubmit = (url: string) => {
    if (url && URL_PATTERN.test(url)) {
      editor
        ?.chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    } else {
      editor?.chain().focus().unsetLink().run();
    }
    setIsOpen(false);
  };
  //handle set and remove link
  const toggleLink = () => {
    if (editor?.isActive("link")) {
      editor?.chain().focus().unsetLink().run();
    } else {
      setIsOpen(true);
    }
  };
  if(!editor){
	return null;
  }
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Label
        htmlFor="dropzone-file"
        className="bg-primary px-5 rounded-md py-2.5 text-base text-text capitalize flex items-center flex-col justify-center cursor-pointer focus:bg-focus hover:bg-hover whitespace-nowrap"
      >
        Upload a File
        <FileInput id="dropzone-file" className="hidden" />
      </Label>
      <button
        onClick={() => editor?.chain().focus().toggleBold().run()}
        disabled={!editor?.can().chain().focus().toggleBold().run()}
        className={`${
          editor?.isActive("bold")
            ? "rounded-sm text-white bg-primary p-1 font-medium"
            : "rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale"
        }`}
      >
        <Bold size="20" />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        disabled={!editor?.can().chain().focus().toggleItalic().run()}
        className={`${
          editor?.isActive("italic")
            ? "rounded-sm text-white bg-primary p-1 font-medium"
            : "rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale"
        }`}
      >
        <Italic size="20" />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleUnderline().run()}
        className={
          editor?.isActive("underline")
            ? "rounded-sm text-white bg-primary p-1 font-medium"
            : "rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale"
        }
      >
        <Underline size={20} />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleBulletList().run()}
        className={`${
          editor?.isActive("bulletList")
            ? "rounded-sm text-white bg-primary p-1 font-medium"
            : "rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale"
        }`}
      >
        <List size="20" />
      </button>
      <button
        onClick={() => {
          editor?.chain().focus().toggleOrderedList().run();
        }}
        className={`${
          editor?.isActive("orderedList")
            ? "rounded-sm text-white bg-primary p-1 font-medium"
            : "rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale"
        }`}
      >
        <ListOrdered size="20" />
      </button>
      <button
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 1 }).run()
        }
        className={
          editor?.isActive("heading", { level: 1 })
            ? "rounded-sm text-white bg-primary p-1 font-medium"
            : "rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale"
        }
      >
        <Heading1 size={20} />
      </button>
      <button
        onClick={() =>
          editor?.chain().focus().toggleHeading({ level: 2 }).run()
        }
        className={
          editor?.isActive("heading", { level: 2 })
            ? "rounded-sm text-white bg-primary p-1 font-medium"
            : "rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale"
        }
      >
        <Heading2 size={20} />
      </button>
      <button onClick={() => editor?.chain().focus().setHorizontalRule().run()}>
        <LucideScanLine size={20} />
      </button>
      <button
        onClick={() => editor?.chain().focus().undo().run()}
        disabled={!editor?.can().chain().focus().undo().run()}
        className={`${
          editor?.isActive("undo")
            ? "rounded-sm text-white bg-primary p-1 font-medium"
            : "rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale"
        }`}
      >
        <Undo size="20" />
      </button>
      <button
        onClick={() => editor?.chain().focus().redo().run()}
        disabled={!editor?.can().chain().focus().redo().run()}
        className={`${
          editor?.isActive("redo")
            ? "rounded-sm text-white bg-primary p-1 font-medium"
            : "rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale"
        }`}
      >
        <Redo size="20" />
      </button>
      <button
        onClick={() => {
          toggleLink();
        }}
        className={`${
          editor?.isActive("link")
            ? "rounded-sm text-white bg-primary p-1 font-medium"
            : "rounded-sm bg-btn p-1 font-medium hover:brightness-90 grayscale"
        }`}
      >
        <Link2 size="20" />
      </button>

      {isOpen && <LinkModal setIsOpen={setIsOpen} submitUrl={handleLinkSubmit} />}
    </div>
  );
};

export default EditorToolbarButton;
