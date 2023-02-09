import { motionListItems } from '@/assets/animations'
// import { NeuVectorSVG } from '@/assets/images'
import { VideoBox } from '@/components/VideoBox'
// import { SuseLogoSVG } from '@/assets/images'
import { SuseLogoTest } from '@/assets/images'
import { motion } from 'framer-motion'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Adaptable Linux Platform - ALP </title>
        <meta name='description' content='The Next-Gen Linux' />
        {/** 👀 Replace with your custom favicon.ico */}
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='grid grid-flow-row gap-8 text-sm'>
        {/** 👀 Call to Action section */}
        <div className='pl-10 pb-20 text-left light:bg-light bg-gray-100 relative'>
            <div className='col-span-2'>
              <p className='max-w-lt mt-20 text-4xl font-black text-black tracking-wide'>Adaptable Linux Platform</p>
              <p className='max-w-md mt-5 text-2xl font-thin text-secondary-dark'>The Kubernetes workload focused OS</p>
              <p className='max-w-md mt-4 text-black font-'>Adaptable Linux Platform allow developers focus on the workloads while keep agnostic from the hardware and container runtime layers</p>
            </div>
            <div className='mt-5'>
              {/* <a href="#" className="inline-flex items-center justify-center p-5 text-base font-medium text-black rounded-lg bg-white hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"> */}
              <a href="#" className="inline-flex items-center justify-center p-5 text-base font-medium text-white bg-green-400 rounded-lg">
                <span className="w-full">Get started with Adaptable Linux Platform, download here!</span>
              </a> 
            </div>
            <div className='col-span-2 object-right'>
              {/* <VideoBox url='https://www.youtube.com/watch?v=1eBjuYhAh4k' /> */}
            </div>
        </div>

        {/** 👀 About section */}
        <div className='grid gap-6 mx-auto w-5/6 2xl:w-4/6'>
          <div className='grid grid-flow-row md:grid-cols-3 gap-14 mb-10'>
            <div>
              <h2 className='text-green-400 font-light text-lg'>Ease of Use</h2>
              <p className='text-bold my-4 text-sm'>Productivity with fast ramp-up.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                The Zero-Touch system, self-management, self-optimized for workloads, self-tuning, self-explaining 
              </motion.p>
            </div>

            <div>
              <h2 className='text-green-400 font-light text-lg'>Anywhere</h2>
              <p className='text-bold my-4 text-sm'>Run Anywhere, Anytime.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                From cloud environments, edge devices to entire data centers, with a minimun footprint and core, Adaptable Linux Platform wins at flexibility and agility
              </motion.p>
            </div>

            <div>
              <h2 className='text-green-400 font-light text-lg'>Supply Chain Security</h2>
              <p className='text-bold my-4 text-sm'>Shift security left without slowing down.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                OpenZeroTrust covers the entire CI/CD pipeline with complete vulnerability management, compliance scanning, and admission controls.
              </motion.p>
            </div>

            <div>
              <h2 className='text-green-400 font-light text-lg'>Network Visibility</h2>
              <p className='text-bold my-4 text-sm'>360 degree view for 100% visibility.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                Layer 7 visibility within and between pods, patented deep packet inspection to detect and block threats, and network mapping.
              </motion.p>
            </div>

            <div>
              <h2 className='text-green-400 font-light text-lg'>Container Segmentation</h2>
              <p className='text-bold my-4 text-sm'>Protect PII. Essential for PCI and other mandates.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                OpenZeroTrust creates a virtual wall to keep personal and private information securely isolated on your network.
              </motion.p>
            </div>

            <div>
              <h2 className='text-green-400 font-light text-lg'>Compliance</h2>
              <p className='text-bold my-4 text-sm'>Exceed the standards. DLP included.</p>
              <motion.p className='grid grid-flow-row gap-4 text-sm font-thin' initial='hidden' animate='visible' variants={motionListItems}>
                We you covered with automated, audit-ready compliance assessment and reporting. Sail through PCI, SOC2 and other audits with less stress.
              </motion.p>
            </div>
          </div>
        </div>

        {/** 👀 How to section */}
        <div className='dark:bg-secondary-dark bg-gray-100 relative'>
          <div className='grid md:grid-cols-2 gap-4 m-16 mx-auto w-5/6 2xl:w-4/6'>
            <p className='text-secondary-dark dark:text-primary font-light text-3xl '>
              Container Security from Pipeline <br /> to Production
            </p>

            <div className='grid grid-flow-row gap-4 2xl:gap-8'>
              <p>
                Open Zero Trust is the only kubernetes-native container security platform that delivers complete container security. Our end-to-end vulnerability management gives you a continuous risk profile on known threats. Our patented container firewall technology starts blocking on Day 1 to protect your infrastructure from known and unknown
                threats. Our behavioral learning and Security as Code automation processes improve the flow between development and security. Integrating policy helps prevent future exposure.
              </p>
            </div>
          </div>
        </div>

        {/** 👀 Getting started section */}
        <div className='mx-auto w-5/6 2xl:w-4/6'>
          <p className='text-2xl my-4 text-left text-secondary-dark dark:text-primary'>Getting started</p>
          <div className='grid grid-flow-row md:grid-cols-3 gap-6'>
            <div>
              <p>Images are available on the NeuVector Docker Hub registry. Use the appropriate version tag for the manager, controller, enforcer, and leave the version as ‘latest’ for scanner and updater. For example:</p>
              <ul className='flex flex-col gap-2 p-4 list-disc'>
                <li>neuvector/manager.preview:5.0.0-preview.3</li>
                <li>neuvector/controller.preview:5.0.0-preview.3</li>
                <li>neuvector/enforcer.preview:5.0.0-preview.3</li>
                <li>neuvector/scanner.preview:latest</li>
                <li>neuvector/updater.preview:latest</li>
              </ul>
            </div>
            <div>
              <p>If deploying with the current NeuVector Helm chart (v1.8.9+), the following changes should be made to values.yml:</p>
              <ul className='flex flex-col gap-2 p-4 list-disc'>
                <li>Update the registry to docker.io</li>
                <li>Update image names/tags to the preview version on Docker hub</li>
                <li>Leave the imagePullSecrets empty</li>
              </ul>
            </div>
            <div className='flex flex-col gap-4'>
              <a href='https://github.com/neuvector/neuvector-helm' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                Deploy Using Helm Charts
              </a>
              <a href='https://open-docs.neuvector.com/deploying/kubernetes' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                Deploy on Kubernetes
              </a>
              <a href='https://open-docs.neuvector.com/deploying/production/operators ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                OpenShift Operator
              </a>
            </div>
          </div>
        </div>
        {/** 👀 Get involved */}
        <div className='mx-auto w-5/6 2xl:w-4/6'>
          <div className='grid grid-flow-row md:grid-cols-2 gap-8 my-10'>
            <div className='flex flex-col gap-4 p-8 bg-gray-400 dark:bg-secondary-dark'>
              <p className='text-2xl mb-4 text-left text-secondary-dark dark:text-primary'>How to get involved</p>

              <p>OpenZeroTrust is an open source project hosted on GitHub.</p>
              <p>Bugs and features are tracked through issues and new code is reviewed through pull requests.</p>

              <div className='grid grid-flow-row md:grid-cols-2 gap-4'>
                <a href='https://github.com/neuvector ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer '>
                  Issues
                </a>
                <a href='https://github.com/neuvector ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer '>
                  Pull Request
                </a>
              </div>
            </div>

            <div className='flex flex-col gap-4 p-8 bg-gray-400 dark:bg-secondary-dark'>
              <p className='text-2xl mb-4 text-left text-secondary-dark dark:text-primary'>How to get support</p>

              <p>Found an issue or have a problem? Community support happens in the #openzerotrust channel in Slack and in GitHub Issues, where you can search and file new issues. </p>
              <p></p>
              <div className='grid grid-flow-row md:grid-cols-2 gap-4'>
                <a href='https://slack.rancher.io/ ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                  Rancher Users Slack
                </a>
                <a href='https://github.com/neuvector ' target='_blank' rel='nofollow noreferrer' className='hover:scale-105 transition-all underline flex align-middle justify-center px-auto py-2 font-bold text-white bg-primary-light dark:text-secondary-dark dark:bg-primary hover:underline hover:cursor-pointer'>
                  Issues
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}