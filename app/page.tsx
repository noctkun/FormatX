// imports
import Dropzone from '@/components/dropzone';

export default function Home() {
  return (
      <div className="space-y-16 pb-8">
          {/* Title + Desc */}
          <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-medium text-center">Unlimited Media Converter</h1>
              <p className="text-muted-foreground text-md md:text-lg text-center md:px-24 xl:px-44 2xl:px-52">
              Ignite your imagination with FormatX – the premier online platform for seamless and free multimedia conversion. Effortlessly convert images, audio, and videos without limits. Begin your transformation today and take your content to extraordinary heights!
              </p>
          </div>

          {/* Upload Box */}
          <Dropzone />
      </div>
  );
}
