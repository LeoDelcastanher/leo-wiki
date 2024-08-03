import {Component} from '@angular/core';
import {MtgCollection} from "../mtg-collection";

@Component({
  selector: 'app-mtg',
  templateUrl: './mtg.component.html',
  styleUrls: ['./mtg.component.scss']
})
export class MtgComponent {

  objectKeys = Object.keys;
  myCollection: { [key: string]: MtgCollection } = {
    'fun-with-fungus': {
      code: 'fun-with-fungus',
      name: 'Fun With Fungus',
      set: 'tsp',
      wtfLink: 'https://mtg.wtf/deck/tsp/fun-with-fungus',
      imgId: 227,
      missingCards: [
        {
          name: 'Pendelhaven',
          qtd: 1,
          imgId: 120
        }
      ],
      color: ['green', 'black'],
      guide: `## Introdução ao Deck "Diversão com Fungos"

				O deck "Diversão com Fungos" é um deck pré-construído da expansão "Planar Chaos" de Magic: The Gathering. Este deck é centrado em criaturas do tipo fungo e na mecânica de esporos.

				### Objetivo do Deck

				O objetivo do deck é gerar e proliferar criaturas do tipo Saprófito (Saproling) usando suas criaturas fungo. Com uma quantidade crescente de Saprófitos, você pode dominar o campo de batalha e vencer seu oponente.

				### Estratégia Principal

				1. **Gerar Esporos**: Suas criaturas fungo, como **Thallid Germinator** e **Sporesower Thallid**, acumulam contadores de esporos. No início de cada turno, adicione um contador de esporos a cada fungo que você controla.

				2. **Criar Saprófitos**: Uma vez que você tenha acumulado contadores de esporos suficientes (geralmente três), você pode removê-los para criar fichas de criatura Saprófito 1/1.

				3. **Aumentar o Poder das Criaturas**: Use cartas como **Thelon of Havenwood** para aumentar a força de suas criaturas fungo. Ele permite que você remova contadores de fungo para colocar marcadores +1/+1 nos fungos, tornando-os mais fortes.

				4. **Proteger suas Criaturas**: Utilize feitiços e habilidades para proteger seus fungos e saprófitos de ameaças do oponente. Cartas de remoção e controle são essenciais para manter o domínio do campo.

				### Cartas Notáveis

				- **Thallid Germinator**: Permite criar Saprófitos sacrificando contadores de esporos.
				- **Sporesower Thallid**: Adiciona contadores de esporos a cada fungo que você controla no início do seu turno.
				- **Thelon of Havenwood**: Fortalece seus fungos com marcadores +1/+1 e potencializa a criação de esporos.
				- **Verdant Embrace**: Um encantamento que gera uma ficha de Saprófito a cada turno.

				### Jogando com o Deck

				1. **Começo do Jogo**: Nos primeiros turnos, concentre-se em jogar terrenos e convocar suas criaturas fungo para começar a acumular contadores de esporos.

				2. **Meio do Jogo**: Use suas habilidades de geração de esporos para criar uma quantidade significativa de Saprófitos. Aproveite para fortalecer seus fungos com **Thelon of Havenwood**.

				3. **Final do Jogo**: Quando você tiver um grande exército de Saprófitos e fungos fortalecidos, use-os para atacar e sobrecarregar seu oponente. Remova as ameaças adversárias com suas cartas de remoção para garantir que seu exército possa finalizar o jogo.

				Lembre-se de manter um equilíbrio entre atacar e defender, utilizando suas cartas de controle para neutralizar as ameaças do oponente e proteger suas criaturas essenciais.

				### Conclusão

				O deck "Diversão com Fungos" é divertido e estratégico, focando no crescimento e proliferação de criaturas. Compreendendo a sinergia entre seus fungos e Saprófitos, você poderá dominar o campo de batalha e vencer seus jogos.

				Se você tiver mais dúvidas ou precisar de mais detalhes sobre estratégias específicas, estou à disposição para ajudar!`
    },
    sunburst: {
      code: 'sunburst',
      name: 'Sunburst',
      set: '5dn',
      wtfLink: 'https://mtg.wtf/deck/5dn/sunburst',
      imgId: 159,
      missingCards: [
        {
          name: 'Joiner Adept',
          qtd: 1,
          imgId: 89
        },
        {
          name: 'Journey of Discovery',
          qtd: 1,
          imgId: 123
        },
      ],
      color: ['black', 'green', 'red', 'blue', 'white', 'artifact'],
      guide: ``
    }
  }
}
