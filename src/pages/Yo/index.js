import Img from "next/image";
const index = () => {
  return (
    <>
      <main>
        <h1>juan felipe valbuena</h1>

        <article>
          <h1>Yo</h1>
          <section>
            <h2>quien soy yo ?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              perferendis vero, dolorum quidem id nesciunt molestiae enim eius
              quod eligendi iusto, ducimus rem adipisci. Perferendis rerum animi
              iure? Ut et quae, sapiente laboriosam numquam, minus iusto
              praesentium earum repellendus, animi ad est eos accusantium
              dolorem consequuntur nemo assumenda laborum. Tenetur soluta omnis
              nisi saepe architecto culpa dolores. Minima quod, ea quasi in
              provident vel facilis? Adipisci sequi totam quidem itaque ducimus
              tenetur nobis, explicabo velit nulla porro deleniti beatae est
              placeat, sit amet aliquam aspernatur! A nisi voluptates fugit
              natus, possimus recusandae iusto aspernatur, maiores odio
              repellendus, officiis quae sint!
            </p>
            <br />
            <Img src="/pp.jpg" width={300} height={300}></Img>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              recusandae nisi neque sit tempora impedit possimus aspernatur
              maiores, aliquam nostrum qui esse veritatis porro, blanditiis
              rerum? Officiis blanditiis temporibus dolorem?
            </p>
          </section>
          <section>
            <h2>para donde voy ?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              perferendis vero, dolorum quidem id nesciunt molestiae enim eius
              quod eligendi iusto, ducimus rem adipisci. Perferendis rerum animi
              iure? Ut et quae, sapiente laboriosam numquam, minus iusto
              praesentium earum repellendus, animi ad est eos accusantium
              dolorem consequuntur nemo assumenda laborum. Tenetur soluta omnis
              nisi saepe architecto culpa dolores. Minima quod, ea quasi in
              provident vel facilis? Adipisci sequi totam quidem itaque ducimus
              tenetur nobis, explicabo velit nulla porro deleniti beatae est
              placeat, sit amet aliquam aspernatur! A nisi voluptates fugit
              natus, possimus recusandae iusto aspernatur, maiores odio
              repellendus, officiis quae sint!
            </p>
            <br />
            <Img src="/pp.jpg" width={300} height={300}></Img>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              recusandae nisi neque sit tempora impedit possimus aspernatur
              maiores, aliquam nostrum qui esse veritatis porro, blanditiis
              rerum? Officiis blanditiis temporibus dolorem?
            </p>
          </section>
          <section>
            <h2>que puedo aportar</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              perferendis vero, dolorum quidem id nesciunt molestiae enim eius
              quod eligendi iusto, ducimus rem adipisci. Perferendis rerum animi
              iure? Ut et quae, sapiente laboriosam numquam, minus iusto
              praesentium earum repellendus, animi ad est eos accusantium
              dolorem consequuntur nemo assumenda laborum. Tenetur soluta omnis
              nisi saepe architecto culpa dolores. Minima quod, ea quasi in
              provident vel facilis? Adipisci sequi totam quidem itaque ducimus
              tenetur nobis, explicabo velit nulla porro deleniti beatae est
              placeat, sit amet aliquam aspernatur! A nisi voluptates fugit
              natus, possimus recusandae iusto aspernatur, maiores odio
              repellendus, officiis quae sint!
            </p>
            <br />
            <Img src="/pp.jpg" width={300} height={300}></Img>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              recusandae nisi neque sit tempora impedit possimus aspernatur
              maiores, aliquam nostrum qui esse veritatis porro, blanditiis
              rerum? Officiis blanditiis temporibus dolorem?
            </p>
          </section>
        </article>
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          height: auto;
        }
        article {
          width: 80%;
        }
        section {
          width: 100%;
          padding: 2rem;
          background-color: #3C3C3C  ;
          border-radius: 0.5rem;
          margin-bottom: 2rem;
        }
        h2 {
          font-size: 2rem;
          color: black;
        }
        p {
          font-size: 1.2rem;
        }
        h1 {
            font-size: 2.5rem;
        }
      `}</style>
    </>
  );
};

export default index;
