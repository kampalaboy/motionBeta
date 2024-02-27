
import './globals.css'


export default function GalleryLayout({
  children, // will be a page or nested layout
}) {

  return (
    <main>
      <div>{children}</div>
    </main>
  );
}
