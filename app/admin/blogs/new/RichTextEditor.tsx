'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import { useEffect, useRef, useCallback } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (html: string) => void;
  onImageUpload?: (file: File) => Promise<string>;
  placeholder?: string;
}

type ToolbarButtonProps = {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title?: string;
  children: React.ReactNode;
};

function ToolbarBtn({ onClick, active, disabled, title, children }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      onMouseDown={(e) => { e.preventDefault(); onClick(); }}
      disabled={disabled}
      title={title}
      className={`w-10 h-10 flex items-center justify-center rounded-md text-sm transition-colors flex-shrink-0 ${
        active
          ? 'bg-[#006837] text-white'
          : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
      } ${disabled ? 'opacity-40 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}

function Divider() {
  return <div className="w-px h-7 bg-gray-300 mx-1.5 flex-shrink-0" />;
}

export default function RichTextEditor({
  value,
  onChange,
  onImageUpload,
  placeholder = 'Start writing your blog post...',
}: RichTextEditorProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const isUpdatingRef = useRef(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3] },
      }),
      Underline,
      Highlight,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({ openOnClick: false, HTMLAttributes: { class: 'text-blue-600 underline' } }),
      Image.configure({ inline: false, HTMLAttributes: { class: 'max-w-full rounded-lg my-3' } }),
      Placeholder.configure({ placeholder }),
    ],
    immediatelyRender: false,
    content: value,
    onUpdate({ editor }) {
      if (!isUpdatingRef.current) {
        onChange(editor.getHTML());
      }
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm max-w-none focus:outline-none min-h-[280px] px-4 py-3',
      },
    },
  });

  // Sync external value changes
  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if (value !== current) {
      isUpdatingRef.current = true;
      editor.commands.setContent(value, { emitUpdate: false });
      isUpdatingRef.current = false;
    }
  }, [editor, value]);

  const handleImageFile = useCallback(async (file: File) => {
    if (!editor) return;
    if (onImageUpload) {
      const url = await onImageUpload(file);
      if (url) editor.chain().focus().setImage({ src: url }).run();
    } else {
      const url = URL.createObjectURL(file);
      editor.chain().focus().setImage({ src: url }).run();
    }
  }, [editor, onImageUpload]);

  const insertLink = useCallback(() => {
    if (!editor) return;
    const url = window.prompt('Enter URL:');
    if (!url) return;
    editor.chain().focus().setLink({ href: url }).run();
  }, [editor]);

if (!editor) return null;

  const isActive = (name: string | Record<string, unknown>, attrs?: Record<string, unknown>) =>
    editor.isActive(name as string, attrs);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 p-2.5 border-b border-gray-200 bg-white">
        {/* Undo / Redo */}
        <ToolbarBtn onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 7v6h6"/><path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13"/>
          </svg>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 7v6h-6"/><path d="M3 17a9 9 0 019-9 9 9 0 016 2.3l3 2.7"/>
          </svg>
        </ToolbarBtn>

        <Divider />

        {/* Text formatting */}
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBold().run()} active={isActive('bold')} title="Bold">
          <strong className="text-base font-black">B</strong>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleItalic().run()} active={isActive('italic')} title="Italic">
          <em className="text-base font-bold">I</em>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleUnderline().run()} active={isActive('underline')} title="Underline">
          <span className="text-base font-bold underline">U</span>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleStrike().run()} active={isActive('strike')} title="Strikethrough">
          <span className="text-base font-bold line-through">S</span>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleCode().run()} active={isActive('code')} title="Inline Code">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
          </svg>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHighlight().run()} active={isActive('highlight')} title="Highlight">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().unsetAllMarks().run()} title="Clear Marks">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/>
            <line x1="2" y1="2" x2="22" y2="22"/>
          </svg>
        </ToolbarBtn>

        <Divider />

        {/* Headings */}
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} active={isActive('heading', { level: 1 })} title="Heading 1">
          <span className="text-sm font-bold">H1</span>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} active={isActive('heading', { level: 2 })} title="Heading 2">
          <span className="text-sm font-bold">H2</span>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} active={isActive('heading', { level: 3 })} title="Heading 3">
          <span className="text-sm font-bold">H3</span>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().setParagraph().run()} active={isActive('paragraph')} title="Paragraph">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M13 4v16M7 4h10a4 4 0 010 8H7V4z"/>
          </svg>
        </ToolbarBtn>

        <Divider />

        {/* Lists */}
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBulletList().run()} active={isActive('bulletList')} title="Bullet List">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="9" y1="6" x2="20" y2="6"/><line x1="9" y1="12" x2="20" y2="12"/><line x1="9" y1="18" x2="20" y2="18"/>
            <circle cx="4" cy="6" r="1.5" fill="currentColor" stroke="none"/><circle cx="4" cy="12" r="1.5" fill="currentColor" stroke="none"/><circle cx="4" cy="18" r="1.5" fill="currentColor" stroke="none"/>
          </svg>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleOrderedList().run()} active={isActive('orderedList')} title="Ordered List">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/>
            <text x="1" y="7" fontSize="6" fill="currentColor" fontWeight="bold">1.</text>
            <text x="1" y="13" fontSize="6" fill="currentColor" fontWeight="bold">2.</text>
            <text x="1" y="19" fontSize="6" fill="currentColor" fontWeight="bold">3.</text>
          </svg>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().toggleBlockquote().run()} active={isActive('blockquote')} title="Blockquote">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
          </svg>
        </ToolbarBtn>

        <Divider />

        {/* Alignment */}
        <ToolbarBtn onClick={() => editor.chain().focus().setTextAlign('left').run()} active={isActive({ textAlign: 'left' })} title="Align Left">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="21" y1="6" x2="3" y2="6"/><line x1="15" y1="12" x2="3" y2="12"/><line x1="17" y1="18" x2="3" y2="18"/>
          </svg>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().setTextAlign('center').run()} active={isActive({ textAlign: 'center' })} title="Align Center">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="21" y1="6" x2="3" y2="6"/><line x1="18" y1="12" x2="6" y2="12"/><line x1="21" y1="18" x2="3" y2="18"/>
          </svg>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().setTextAlign('right').run()} active={isActive({ textAlign: 'right' })} title="Align Right">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="12" x2="9" y2="12"/><line x1="21" y1="18" x2="7" y2="18"/>
          </svg>
        </ToolbarBtn>
        <ToolbarBtn onClick={() => editor.chain().focus().setTextAlign('justify').run()} active={isActive({ textAlign: 'justify' })} title="Justify">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="12" x2="3" y2="12"/><line x1="21" y1="18" x2="3" y2="18"/>
          </svg>
        </ToolbarBtn>

        <Divider />

        {/* Link */}
        <ToolbarBtn onClick={insertLink} active={isActive('link')} title="Insert Link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
          </svg>
        </ToolbarBtn>

        {/* Image */}
        <ToolbarBtn onClick={() => imageInputRef.current?.click()} title="Insert Image">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
        </ToolbarBtn>

        {/* HR */}
        <ToolbarBtn onClick={() => editor.chain().focus().setHorizontalRule().run()} title="Horizontal Rule">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"/>
          </svg>
        </ToolbarBtn>

        {/* Clear all formatting */}
        <ToolbarBtn onClick={() => { editor.chain().focus().clearNodes().unsetAllMarks().run(); }} title="Clear Formatting">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 20h9M4.5 15.5l11-11 3 3-11 11H4.5v-3z"/>
            <line x1="2" y1="2" x2="22" y2="22" strokeWidth="1.5"/>
          </svg>
        </ToolbarBtn>
      </div>

      {/* Editor area */}
      <div
        className="bg-[#fafaf5] cursor-text overflow-y-auto max-h-[480px]"
        onClick={() => editor.commands.focus()}
      >
        <EditorContent editor={editor} />
      </div>

      {/* Hidden image input */}
      <input
        ref={imageInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleImageFile(file);
          e.target.value = '';
        }}
      />

      <style>{`
        .ProseMirror p.is-editor-empty:first-child::before {
          color: #adb5bd;
          content: attr(data-placeholder);
          float: left;
          height: 0;
          pointer-events: none;
        }
        .ProseMirror h1 { font-size: 1.75rem; font-weight: 700; margin: 1rem 0 0.5rem; }
        .ProseMirror h2 { font-size: 1.4rem; font-weight: 700; margin: 0.9rem 0 0.45rem; }
        .ProseMirror h3 { font-size: 1.15rem; font-weight: 600; margin: 0.8rem 0 0.4rem; }
        .ProseMirror p { margin: 0.4rem 0; line-height: 1.7; }
        .ProseMirror ul { list-style-type: disc; padding-left: 1.5rem; margin: 0.5rem 0; }
        .ProseMirror ol { list-style-type: decimal; padding-left: 1.5rem; margin: 0.5rem 0; }
        .ProseMirror blockquote { border-left: 3px solid #006837; padding-left: 1rem; color: #555; margin: 0.75rem 0; font-style: italic; }
        .ProseMirror code { background: #f0f0f0; border-radius: 3px; padding: 0.1em 0.3em; font-size: 0.875em; font-family: monospace; }
        .ProseMirror hr { border: none; border-top: 2px solid #e5e7eb; margin: 1rem 0; }
.ProseMirror mark { background: #fef08a; border-radius: 2px; }
        .ProseMirror a { color: #2563eb; text-decoration: underline; }
      `}</style>
    </div>
  );
}
