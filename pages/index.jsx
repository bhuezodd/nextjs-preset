import PButton from '@components/PButton'
import Default from '@layouts/Default'

export default function Home() {
  return (
    <>
      <Default name="Home">
        <div className="relative w-full h-full">
          <div className="absolute z-10 flex justify-center w-full top-40">
            <PButton>
              Get Started
            </PButton>
          </div>
          <div className="absolute w-full md:w-2/4 top-48 md:left-1/4">
            <img src="/imgs/turbo.jpg" />
          </div>
        </div>
      </Default>
    </>
  )
}
