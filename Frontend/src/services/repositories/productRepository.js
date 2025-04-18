import axiosInstance from "../axiosInstance";

class ProductRepository {
  async getAllProducts() {
    const res = await axiosInstance.get("/products");
    return res.data;
  }

  async getProductById(id) {
    const res = await axiosInstance.get(`/products/${id}`);
    return res.data;
  }

  async createProduct(data) {
    const res = await axiosInstance.post("/products", data);
    return res.data;
  }

  async updateProduct(id, data) {
    const res = await axiosInstance.put(`/products/${id}`, data);
    return res.data;
  }

  async deleteProduct(id) {
    const res = await axiosInstance.delete(`/products/${id}`);
    return res.data;
  }
}

const ProductRepository = new ProductRepository(); // Singleton instance
export default ProductRepository;
