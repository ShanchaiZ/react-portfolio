//Client.js is what the app will use to communicate with Sanity.io. Therefore we need to install Sanity.io Client Packet
import sanityClient from '@sanity/client'

export default sanityClient ({
    projectId:"6b1omfv8",
    dataset: "production"
})