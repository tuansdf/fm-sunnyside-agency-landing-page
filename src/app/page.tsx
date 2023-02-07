import Image from "next/image";
import ImageSwitch from "/src/app/image-switch";

import arrowDownIcon from "/public/images/icon-arrow-down.svg";
import facebookIcon from "/public/images/icon-facebook.svg";
import hamburgerIcon from "/public/images/icon-hamburger.svg";
import instagramIcon from "/public/images/icon-instagram.svg";
import pinterestIcon from "/public/images/icon-pinterest.svg";
import twitterIcon from "/public/images/icon-twitter.svg";
import emilyImg from "/public/images/image-emily.jpg";
import jennieImg from "/public/images/image-jennie.jpg";
import thomasImg from "/public/images/image-thomas.jpg";
import logoImg from "/public/images/logo.svg";

import galleryConeImgDesktop from "/public/images/desktop/image-gallery-cone.jpg";
import galleryMilkBottlesImgDesktop from "/public/images/desktop/image-gallery-milkbottles.jpg";
import galleryOrangeImgDesktop from "/public/images/desktop/image-gallery-orange.jpg";
import gallerySugarCubesImgDesktop from "/public/images/desktop/image-gallery-sugar-cubes.jpg";
import graphicDesignImgDesktop from "/public/images/desktop/image-graphic-design.jpg";
import headerImgDesktop from "/public/images/desktop/image-header.jpg";
import photographyImgDesktop from "/public/images/desktop/image-photography.jpg";
import standOutImgDesktop from "/public/images/desktop/image-stand-out.jpg";
import transformImgDesktop from "/public/images/desktop/image-transform.jpg";
import galleryConeImgMobile from "/public/images/mobile/image-gallery-cone.jpg";
import galleryMilkBottlesImgMobile from "/public/images/mobile/image-gallery-milkbottles.jpg";
import galleryOrangeImgMobile from "/public/images/mobile/image-gallery-orange.jpg";
import gallerySugarCubesImgMobile from "/public/images/mobile/image-gallery-sugar-cubes.jpg";
import graphicDesignImgMobile from "/public/images/mobile/image-graphic-design.jpg";
import headerImgMobile from "/public/images/mobile/image-header.jpg";
import photographyImgMobile from "/public/images/mobile/image-photography.jpg";
import standOutImgMobile from "/public/images/mobile/image-stand-out.jpg";
import transformImgMobile from "/public/images/mobile/image-transform.jpg";

export default function Page() {
  return (
    <>
      <nav className="absolute z-10 flex w-full items-center justify-between px-6 py-8 desktop:px-8">
        <Image src={logoImg} alt="logo" />
        <button className="desktop:hidden">
          <Image src={hamburgerIcon} alt="hamburger" />
        </button>
        <ul className="flex items-center gap-14 text-neutral-0">
          <li>About</li>
          <li>Services</li>
          <li>Projects</li>
          <li>
            <button className="rounded-full bg-neutral-0 px-6 py-3 font-serif text-base font-bold uppercase text-neutral-900 transition-colors duration-75 hover:bg-neutral-0/25 hover:text-neutral-0">
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <main className="flex-1">
        <section className="relative flex flex-col items-center justify-center">
          <ImageSwitch
            mobileSrc={headerImgMobile}
            desktopSrc={headerImgDesktop}
            alt="header image"
          />

          <div className="absolute flex w-full max-w-xs flex-col items-center desktop:mb-36 desktop:max-w-none">
            <div className="mb-16 text-center font-serif text-4xl font-black uppercase leading-tight tracking-[0.2em] text-neutral-0 desktop:mb-24 desktop:text-[3.5rem]">
              We are creatives
            </div>
            <Image src={arrowDownIcon} alt="" />
          </div>
        </section>

        <div className="desktop:grid desktop:grid-cols-2 desktop:place-items-center">
          <section>
            <ImageSwitch
              mobileSrc={transformImgMobile}
              desktopSrc={transformImgDesktop}
              alt="transform image"
            />
          </section>

          <section className="mx-auto max-w-xs space-y-8 py-16 text-center desktop:order-first desktop:max-w-md desktop:text-start">
            <h2 className="mb-6 font-serif text-3xl font-black desktop:text-[2.5rem] desktop:leading-tight">
              Transform your brand
            </h2>
            <p className="mb-8 text-neutral-800">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <button className="border-b-8 border-primary-yellow/25 px-2 font-serif text-base font-black uppercase leading-3">
              learn more
            </button>
          </section>

          <section>
            <ImageSwitch
              mobileSrc={standOutImgMobile}
              desktopSrc={standOutImgDesktop}
              alt="stand out image"
            />
          </section>

          <section className="mx-auto max-w-xs py-16 text-center desktop:max-w-md desktop:text-start">
            <h2 className="mb-6 font-serif text-3xl font-black desktop:text-[2.5rem] desktop:leading-tight">
              Stand out to the right audience
            </h2>
            <p className="mb-8 text-neutral-800">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we&apos;ll build
              and extend your brand in digital places.
            </p>
            <button className="border-b-8 border-primary-red/25 px-2 font-serif text-base font-black uppercase leading-3">
              learn more
            </button>
          </section>

          <section className="relative">
            <ImageSwitch
              mobileSrc={graphicDesignImgMobile}
              desktopSrc={graphicDesignImgDesktop}
              alt="graphic design image"
            />

            <div className="absolute bottom-0 right-0 left-0 mx-auto mb-16 max-w-sm px-4 text-center text-primary-cyan-1">
              <h2 className="mb-6 font-serif text-3xl font-black">
                Graphic Design
              </h2>
              <p className="text-base">
                Great design makes you memorable. We deliver artwork that
                underscores your brand message and captures potential
                clients&apos; attention.
              </p>
            </div>
          </section>

          <section className="relative">
            <ImageSwitch
              mobileSrc={photographyImgMobile}
              desktopSrc={photographyImgDesktop}
              alt="photography image"
            />

            <div className="absolute bottom-0 right-0 left-0 mx-auto mb-16 max-w-sm px-4 text-center text-primary-blue">
              <h2 className="mb-6 font-serif text-3xl font-black">
                Photography
              </h2>
              <p className="text-base">
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </section>
        </div>

        <section className="mx-auto max-w-sm px-6 pt-16 pb-20 text-center desktop:max-w-6xl desktop:px-5 desktop:py-40">
          <h2 className="mb-16 font-serif text-base font-black uppercase tracking-[0.3em] text-neutral-600 desktop:mb-20 desktop:text-xl">
            Client testimonials
          </h2>

          <div className="space-y-16 desktop:grid desktop:grid-cols-3 desktop:gap-8 desktop:space-y-0">
            <div className="flex flex-col items-center space-y-8 desktop:space-y-16">
              <Image
                src={emilyImg}
                alt="Emily's image"
                className="h-16 w-16 rounded-full"
              />
              <p className="text-neutral-800">
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <div>
                <div className="mb-2 font-serif font-black">Emily R.</div>
                <div className="text-sm text-neutral-700">
                  Marketing Director
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-8 desktop:space-y-16">
              <Image
                src={thomasImg}
                alt="Thomas's image"
                className="h-16 w-16 rounded-full"
              />
              <p className="text-neutral-800">
                Sunnyside&apos;s enthusiasm coupled with their keen interest in
                our brand&apos;s success made it a satisfying and enjoyable
                experience.
              </p>
              <div>
                <div className="mb-2 font-serif font-black">Thomas S.</div>
                <div className="text-sm text-neutral-700">
                  Chief Operating Officer
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-8 desktop:space-y-16">
              <Image
                src={jennieImg}
                alt="Jennie's image"
                className="h-16 w-16 rounded-full"
              />
              <p className="text-neutral-800">
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside. Highly recommended!
              </p>
              <div>
                <div className="mb-2 font-serif font-black">Jennie F.</div>
                <div className="text-sm text-neutral-700">Business Owner</div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 desktop:grid-cols-4">
          <ImageSwitch
            mobileSrc={galleryMilkBottlesImgMobile}
            desktopSrc={galleryMilkBottlesImgDesktop}
            alt="milk bottle image"
          />
          <ImageSwitch
            mobileSrc={galleryOrangeImgMobile}
            desktopSrc={galleryOrangeImgDesktop}
            alt="orange image"
          />
          <ImageSwitch
            mobileSrc={galleryConeImgMobile}
            desktopSrc={galleryConeImgDesktop}
            alt="cone image"
          />
          <ImageSwitch
            mobileSrc={gallerySugarCubesImgMobile}
            desktopSrc={gallerySugarCubesImgDesktop}
            alt="sugar image"
          />
        </section>
      </main>

      <footer className="flex flex-col items-center bg-[#8fd3c4] pt-16 pb-20 text-center desktop:pt-20">
        <svg
          width="124"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          className="mb-8 fill-primary-cyan-1"
        >
          <path
            d="M5.857 18.708c1.638 0 2.995-.36 4.07-1.08 1.075-.721 1.613-1.769 1.613-3.144-.083-1.855-1.464-3.246-4.144-4.173l-1.44-.597c-.314-.1-.538-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.182.347 1.513 1.043l3.698-1.044c-.893-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193C1.15 7.08.645 8.116.645 9.39c0 .398.058.766.174 1.106.116.34.29.638.521.894.232.257.455.48.67.671.215.19.488.369.82.534.33.166.582.286.756.36.174.075.41.162.707.261l.422.15 1.49.546c.363.133.6.244.707.335a.449.449 0 01.16.36c0 .431-.404.647-1.215.647-1.191 0-1.903-.53-2.134-1.59L0 14.509c.463 2.8 2.416 4.2 5.857 4.2zm11.636 0c1.638 0 2.845-.63 3.623-1.888v1.615h5.112V5.366h-5.112v7.156c0 1.474-.505 2.21-1.514 2.21-1.026 0-1.539-.736-1.539-2.21V5.366h-5.112v7.653c0 3.793 1.514 5.69 4.542 5.69zm16.103-.273V11.28c0-1.475.504-2.212 1.513-2.212 1.026 0 1.54.737 1.54 2.212v7.155h5.111v-7.652c0-3.793-1.513-5.69-4.541-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zm15.383 0V11.28c0-1.475.504-2.212 1.514-2.212 1.025 0 1.538.737 1.538 2.212v7.155h5.113v-7.652c0-3.793-1.514-5.69-4.542-5.69-1.638 0-2.846.63-3.623 1.888V5.366h-5.113v13.069h5.113zM64.958 24l8.289-18.634H67.91l-2.532 6.684-2.258-6.684h-5.584l5.435 11.802L59.944 24h5.014zm13.67-5.292c1.638 0 2.995-.36 4.07-1.08 1.076-.721 1.614-1.769 1.614-3.144-.083-1.855-1.465-3.246-4.145-4.173l-1.44-.597c-.314-.1-.537-.198-.67-.298a.45.45 0 01-.198-.373c0-.414.273-.62.819-.62.678 0 1.183.347 1.514 1.043l3.698-1.044c-.894-2.22-2.614-3.329-5.162-3.329-1.522 0-2.788.398-3.797 1.193-1.01.795-1.514 1.83-1.514 3.105 0 .398.058.766.173 1.106.116.34.29.638.522.894.231.257.455.48.67.671.215.19.488.369.819.534.33.166.583.286.757.36.173.075.41.162.707.261l.422.15 1.489.546c.364.133.6.244.707.335a.449.449 0 01.161.36c0 .431-.405.647-1.216.647-1.19 0-1.902-.53-2.134-1.59l-3.723.844c.464 2.8 2.416 4.2 5.857 4.2zm9.8-14.137c.91 0 1.613-.215 2.11-.646.495-.43.744-.977.744-1.64 0-.678-.24-1.23-.72-1.651C90.082.21 89.371 0 88.428 0c-.943 0-1.655.211-2.135.634-.48.422-.72.973-.72 1.652 0 .662.249 1.209.745 1.64.497.43 1.2.645 2.11.645zm2.556 13.864V5.366H85.87v13.069h5.113zm7.74.273c1.737 0 2.977-.63 3.722-1.888v1.615h5.112V.472h-5.112v6.534c-.745-1.275-1.985-1.913-3.723-1.913-1.753 0-3.214.642-4.38 1.926-1.166 1.283-1.75 2.91-1.75 4.882 0 1.97.584 3.598 1.75 4.882 1.166 1.283 2.627 1.925 4.38 1.925zm1.39-3.9c-.729 0-1.312-.274-1.75-.82-.439-.547-.658-1.243-.658-2.087 0-.845.215-1.54.645-2.087.447-.547 1.034-.82 1.762-.82s1.311.273 1.75.82c.438.546.657 1.242.657 2.087 0 .844-.219 1.54-.657 2.087-.439.546-1.022.82-1.75.82zm16.698 3.9c2.597 0 4.624-.754 6.08-2.26l-2.11-2.833c-1.042.845-2.217 1.267-3.524 1.267-.992 0-1.799-.224-2.42-.67-.62-.448-.93-.879-.93-1.293h9.604c.083-.298.124-.687.124-1.167 0-2.054-.674-3.677-2.022-4.87-1.349-1.193-3.073-1.789-5.175-1.789-2.25 0-4.028.671-5.335 2.013-1.307 1.341-1.961 2.956-1.961 4.844 0 1.938.69 3.549 2.072 4.833 1.382 1.283 3.247 1.925 5.597 1.925zm2.208-8.149h-5.112c.033-.613.298-1.08.794-1.404.496-.323 1.084-.484 1.762-.484.678 0 1.266.165 1.762.497.497.331.761.795.794 1.391z"
            fillRule="nonzero"
          />
        </svg>

        <ul className="mb-20 flex gap-12 text-primary-cyan-2">
          <li>About</li>
          <li>Service</li>
          <li>Project</li>
        </ul>

        <div className="flex items-center gap-6">
          <Image src={facebookIcon} alt="facebook icon" />
          <Image src={instagramIcon} alt="instagram icon" />
          <Image src={twitterIcon} alt="twitter icon" />
          <Image src={pinterestIcon} alt="pinterest icon" />
        </div>
      </footer>
    </>
  );
}
