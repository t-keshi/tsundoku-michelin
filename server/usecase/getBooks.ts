import React from "react";
import { prisma } from "../prisma";

export const getBooks = async () => {
  return prisma.book.findMany();
};
