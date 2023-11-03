type ImageProps = {
  src: string
  alt: string
}

export default function Image({ src, alt }: ImageProps) {
  return (
    <div className="w-10 h-10 bg-[#D3D3D3] rounded-[10px] shadow-[0_10px_5px_-5px_rgba(62,39,83,0.05)] overflow-hidden">
      <img src={src} alt={alt} />
    </div>
  )
}
