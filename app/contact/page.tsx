import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import ContactPageSection from '@/component/contact/ContactPageSection'
import Layout from '@/component/layout/Layout'
import React from 'react'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Ispeak Contact",
  description: "Developed by trungkienit25",
}
const page = () => {
  return (
    <Layout>
        <BreadcrumbSection header='Contact Us' title="Contact us"/>
        <ContactPageSection/>
    </Layout>
  )
}

export default page