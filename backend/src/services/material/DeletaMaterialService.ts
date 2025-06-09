import prismaClient from "../../prisma";

interface MaterialRequest {
    id: string;
}

class DeletaMaterialService {
    async execute({ id }: MaterialRequest) {
        const material = await prismaClient.material.delete({
            where: {
                id
            }
        })
        return material;
    }

}

export { DeletaMaterialService }