import React from "react";
import thumbnail from "assets/books-thumbnail/veritta-chintakal.jpg";
import cover from "assets/books-cover/veritta-chintakal.jpg";

const Contents = () => {
  return (
    <>
      <h1>VERITTA CHINTAKAL</h1>
      <br />
      <p>
        Veritta Chintakal is a collection of articles on Indian history and
        social history of Kerala which Balakrishnan wrote in Madhyamam Daily
        when he was Chief Editor which he had titled &apos;Sermons From The
        Mount&apos;. These were reflections triggered by contemporary events in
        the political space.
      </p>

      <p>The articles are:</p>
      <ol>
        <li> India: From Gandhiji to Ambedkar</li>
        <li> The White Looters, Independent India etc</li>
        <li> Gandhiji, Cabinet Mission Plan and Partition of India</li>
        <li> On Demon, Structure of Nation etc</li>
        <li> Ambedkar and Governance Mechanism of India</li>
        <li> The Great Transition of India</li>
        <li> A Tribute to the Non violent (Dis)order in the land of Bharath</li>
        <li> I am a Communalist</li>
        <li> A Mirage in the name of Roop Kanwar</li>
        <li> An Index to Anti reservation and Reservation Strikes</li>
        <li> Caste Society of India- A glance through History</li>
        <li> Sonny Boy and the Egg – A childhood Memory</li>
        <li> A Footnote to Gorbachev and Peristroika</li>
        <li> Tippu and Historians</li>
        <li> The Guru who Undertook a Pilgrimage to Humanity</li>
        <li> Sahodaran Ayyappan</li>
        <li> Swamy Satyavirthan – A Symbol of Sree Narayana Guru’s Vision</li>
      </ol>
    </>
  );
};
const verittaChintakal = {
  id: "veritta-chintakal",
  title: "Veritta Chintakal",
  subtitle: "Category : COLLECTIONS & SELECTED WORKS",
  overview:
    "The book is a collection of essays on the great social reformer of Kerala and spiritual leader Sri. Narayana Guru published on the event of his birth centenary. It gives a rare insight into the person and activities of a visionary.",
  description: "",
  thumbnail,
  cover,
  contents: Contents,
};

export default verittaChintakal;
