import EventHandlerInterface from '../../../@shared/event/event-handler.interface';
import ProductCreatedEvent from '../product-created.event';

export default class SendEmailWhenProductIsCreatedHandler
  implements EventHandlerInterface<ProductCreatedEvent>
{
  handle(_event: ProductCreatedEvent): void {
    console.log('Send email when product is created');
  }
}
