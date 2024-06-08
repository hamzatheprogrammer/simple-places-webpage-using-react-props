import './App.css';
import Main from './components/Main'
import Footer from './components/Footer'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import house from './images/house.png'
import zoo from './images/zoo.webp'
import islamabad from './images/islamabad.jpeg'


function App() {
  return (
   <div>
    <h1 style={{textAlign: 'center'}}> Places </h1>
    <Main pic={house} btn="Read More" heading="House" para="A house is more than just a structure; it is a place of comfort, security, and belonging. Typically constructed from materials like wood, brick, or concrete, a house provides shelter and protection from the elements. Inside, it consists of various rooms such as bedrooms, bathrooms, a kitchen, and living areas, each designed to meet the daily needs of its occupants. Beyond its physical attributes, a house often holds sentimental value, serving as the backdrop for family gatherings, personal milestones, and cherished memories. Whether a modest cottage or a grand mansion, a house reflects the lifestyle and aspirations of those who inhabit it, symbolizing stability and a personal sanctuary."/>
    <Main pic={zoo} btn="Read More" heading="Zoo" para="A zoo, short for zoological park or zoological garden, is a facility where animals are housed within enclosures, displayed to the public, and often bred for conservation purposes. Zoos serve as vital educational resources, offering visitors the chance to observe a diverse array of species from around the world, from majestic lions and elephants to exotic birds and reptiles. They play a crucial role in wildlife conservation, participating in breeding programs for endangered species and conducting research to enhance our understanding of animal behavior and habitats. Modern zoos strive to replicate natural environments, ensuring the well-being and enrichment of the animals. Additionally, zoos engage in outreach and educational programs, fostering a greater appreciation and awareness of wildlife and the importance of preserving biodiversity."/>
    <Main pic={islamabad} btn="Read More" heading="Islamabad" para="Islamabad, the capital city of Pakistan, is known for its modern architecture, scenic beauty, and orderly layout. Nestled at the foothills of the Margalla Hills, it offers a unique blend of natural beauty and urban planning. The city is characterized by its wide, tree-lined streets, extensive green spaces, and a well-organized grid system. Islamabad is home to several important government buildings, foreign embassies, and educational institutions, making it the political and administrative hub of the country. Notable landmarks include the Faisal Mosque, one of the largest mosques in the world, and the Pakistan Monument, which symbolizes the nation's unity. With its serene environment, cultural richness, and strategic significance, Islamabad stands as a symbol of Pakistan's aspirations and progress."/>
    <Footer/>
   </div>
  );
}

export default App;
