import { timeline } from '../lib/data.js'

export default function Career() {
    const generateTimeline = () =>
      timeline.years.map((item, index) => (
        <tr key={index}>
          <th>{item}</th>
          <td dangerouslySetInnerHTML={{ __html: timeline.experiences[index] }} />
        </tr>
    ));

    return (
    <section id='career'>
        <h2>Career</h2>
        <hr />
        <table>
        <tbody>{generateTimeline()}</tbody>
        </table>
    </section>
    );
}