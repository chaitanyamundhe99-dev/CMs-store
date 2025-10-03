let orders = [];

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const statuses = ['Processing', 'Shipped', 'Delivered'];
    orders = orders.map(order => {
      const nextStatusIndex = (statuses.indexOf(order.status) + 1) % statuses.length;
      return { ...order, status: statuses[nextStatusIndex] };
    });
    res.status(200).json(orders);
  } else if (req.method === 'POST') {
    const newOrder = req.body;
    orders.push(newOrder);
    res.status(200).json({ message: 'Order added' });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}