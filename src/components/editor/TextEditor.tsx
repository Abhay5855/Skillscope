import { EditorContent, Editor } from '@tiptap/react';
import { FC } from 'react';

type EditorProps = {
	editor: Editor | null;
};

const TextEditor: FC<EditorProps> = ({ editor }) => {
	if (!editor) return null;

	return (
		<div className='h-[20vh] flex flex-col'>
			<EditorContent
				className='bg-white border h-full border-border rounded-b1 p-2 overflow-auto '
				editor={editor}
			/>
		</div>
	);
};

export default TextEditor;
