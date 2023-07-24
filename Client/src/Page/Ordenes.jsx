import { useParams } from 'react-router-dom'
import { useQuery, useMutation, useQueryClient }  from '@tanstack/react-query'
import { detalleOrder } from '../api/orders'
import {useState} from "react";

const Ordenes = () => {
  const params = useParams()
  console.log(params)

  const { isLoading, data: orders, isError, error } = useQuery({
    queryKey: ['orders'],
    queryFn: detalleOrder,
  })

  return (
    <div className="grid justify-items-center">
      <h1>Módulo de Logística - Órdenes y Productos</h1>
      <h2>Órdenes</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th className="p-2 m-3" >Estado</th>
            <th>Cliente</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {detalleOrder.map((orden) => (
            <tr border="1">
              <td className="p-2">{orden.id}</td>
              <td>{orden.createdate}</td>
              <td className="m-3 p-5">{orden.status}</td>
              <td>{orden.cliente}</td>
              <td>{orden.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Detalles de la Orden</h2>
      {ordenes.length > 0 && (
        <div>
          <p>ID: {ordenes[0].id}</p>
          <p>Fecha: {ordenes[0].fecha}</p>
          <p>Estado: {ordenes[0].estado}</p>
          <p>Cliente: {ordenes[0].cliente}</p>
          <p>Total: {ordenes[0].total}</p>
          <h3>Productos:</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {ordenes[0].productos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>{producto.nombre}</td>
                  <td>{producto.cantidad}</td>
                  <td>{producto.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Ordenes;