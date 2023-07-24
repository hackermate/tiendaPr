const { Router } = require('express');
const { Orden, Item } = require('../db');
const router = Router();

router.get('/', async (req, res) => {
    const { status } = req.query
    const allOrdens = await Orden.findAll({
        include: Item
    })

    if (status) {
        const byStatus = await allOrdens.filter(i => i.status.toLowerCase().startsWith(i.status.toLowerCase()))
        byStatus.length ?
            res.json(byStatus) :
            res.status(404).send({ 'msg': 'Not found' })
    } else {
        res.json(allOrdens)
    }
});

router.get('/:id', async (req, res, next) => {
    const id  = req.params.id;

    let ordenes

    try {
        if (id.length > 1) {
            ordenes = await Orden.findByPk(id, { include: Item })
            ordenes = {
                id: ordenes.id,
                createdate: ordenes.createdate,
                status: ordenes.status,
                client: ordenes.client,
                shippingaddress: ordenes.shippingaddress,
                shippingpromise: ordenes.shippingpromise,
                items: ordenes.items.map((e) => {
                    return {
                        id: e.id,
                        title: e.title,
                        descrition: e.description,
                        url: e.url,
                        price: e.price,
                        quantity: e.quantity
                    }
                })
            }
        }
        res.json(ordenes)
    } catch (error) {
        next(error)
    }
});

router.post('/', async (req, res, next) => {
    const {
        createdate,
        status,
        client,
        shippingaddress,
        shippingpromise,
        items
    } = req.body;
    
    try {
        let orden = await Orden.create({ createdate, status, client, shippingaddress, shippingpromise })
        await orden.setItems(items)
    
        let orderWithItem = await Orden.findOne({
            where: { status: status },
            attributes: {
                    exclude: ['updatedAt', 'createdAt'],
            },
            include: {
                model: Item,
                through: {
                    attributes: []
                }
            }
        })
        res.json(orderWithItem)
    } catch (error) {
        next(error)
    }
});

router.delete('/:id', async(req, res, next) => {
    try{
        console.log("entro al delete")
        //let idOrden= parseInt(req.params.id);
        let resultDelete = await Orden.destroy({where:{id : req.params.id}})
        if(!resultDelete){
            return res.status(404).send('No existe la orden con el ID especifico')
        }else{
            return  res.status(201).send(`La orden ${req.params.id} ha sido eliminada`)
        };
    }catch(err){
        next(err)
    }
});

module.exports = router;