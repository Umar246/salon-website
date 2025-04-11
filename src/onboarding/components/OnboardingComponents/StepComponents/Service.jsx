import  { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, ArrowLeft } from 'lucide-react';

const Service = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});
  const [services, setServices] = useState([]);

  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [showSubCategoryModal, setShowSubCategoryModal] = useState({ visible: false, category: '' });
  const [showAddServicePage, setShowAddServicePage] = useState(false);

  const [categoryInput, setCategoryInput] = useState('');
  const [subCategoryInput, setSubCategoryInput] = useState('');

  const [serviceForm, setServiceForm] = useState({
    name: '',
    category: '',
    subCategory: '',
    description: '',
    price: '',
    durationHour: '',
    durationMin: ''
  });

  // Add category
  const handleAddCategory = () => {
    if (categoryInput.trim()) {
      setCategories([...categories, categoryInput]);
      setSubCategories({ ...subCategories, [categoryInput]: [] });
      setCategoryInput('');
      setShowCategoryModal(false);
    }
  };

  // Add sub-category
  const handleAddSubCategory = () => {
    const cat = showSubCategoryModal.category;
    if (subCategoryInput.trim()) {
      const updated = { ...subCategories };
      updated[cat] = [...(updated[cat] || []), subCategoryInput];
      setSubCategories(updated);
      setSubCategoryInput('');
      setShowSubCategoryModal({ visible: false, category: '' });
    }
  };

  // Save service
  const handleSaveService = () => {
    const duration = parseInt(serviceForm.durationHour || 0) * 60 + parseInt(serviceForm.durationMin || 0);
    const newService = {
      ...serviceForm,
      duration
    };
    setServices([...services, newService]);
    setServiceForm({
      name: '',
      category: '',
      subCategory: '',
      description: '',
      price: '',
      durationHour: '',
      durationMin: ''
    });
    setShowAddServicePage(false);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {!showAddServicePage ? (
        <>
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Services Setup</h2>
            <Button onClick={() => setShowAddServicePage(true)}>+ Add Service</Button>
          </div>

          {/* Category Section */}
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Categories</h3>
              <Button variant="outline" onClick={() => setShowCategoryModal(true)}>+ Add Category</Button>
            </div>
            <ul className="mt-4 space-y-2">
              {categories.map((cat, index) => (
                <li key={index} className="flex justify-between items-center border p-2 rounded">
                  <span>{cat}</span>
                  <Plus
                    className="cursor-pointer"
                    onClick={() => setShowSubCategoryModal({ visible: true, category: cat })}
                  />
                </li>
              ))}
            </ul>
          </div>

          {/* Services Preview */}
          {services.length > 0 && (
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-2">Added Services</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index} className="border p-3 rounded shadow">
                    <h4 className="font-bold">{service.name}</h4>
                    <p className="text-sm text-gray-600">{service.description}</p>
                    <p>Category: {service.category} / {service.subCategory}</p>
                    <p>Price: Rs. {service.price}</p>
                    <p>Duration: {service.duration} min</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ) : (
        <>
          {/* Add Service Page */}
          <div className="flex items-center gap-2 mb-4">
            <ArrowLeft className="cursor-pointer" onClick={() => setShowAddServicePage(false)} />
            <h2 className="text-xl font-semibold">Add New Service</h2>
          </div>

          <div className="space-y-4">
            <Input
              placeholder="Service Name"
              value={serviceForm.name}
              onChange={(e) => setServiceForm({ ...serviceForm, name: e.target.value })}
            />

            <select
              className="w-full border rounded px-4 py-2"
              value={serviceForm.category}
              onChange={(e) => {
                setServiceForm({ ...serviceForm, category: e.target.value, subCategory: '' });
              }}
            >
              <option value="">Select Category</option>
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              className="w-full border rounded px-4 py-2"
              value={serviceForm.subCategory}
              onChange={(e) => setServiceForm({ ...serviceForm, subCategory: e.target.value })}
              disabled={!serviceForm.category}
            >
              <option value="">Select Sub-Category</option>
              {serviceForm.category &&
                subCategories[serviceForm.category]?.map((sub, i) => (
                  <option key={i} value={sub}>{sub}</option>
                ))}
            </select>

            <Textarea
              placeholder="Description"
              value={serviceForm.description}
              onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
            />

            <Input
              type="number"
              placeholder="Price"
              value={serviceForm.price}
              onChange={(e) => setServiceForm({ ...serviceForm, price: e.target.value })}
            />

            <div className="flex gap-2">
              <Input
                type="number"
                placeholder="Hours"
                value={serviceForm.durationHour}
                onChange={(e) => setServiceForm({ ...serviceForm, durationHour: e.target.value })}
              />
              <Input
                type="number"
                placeholder="Minutes"
                value={serviceForm.durationMin}
                onChange={(e) => setServiceForm({ ...serviceForm, durationMin: e.target.value })}
              />
            </div>

            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setShowAddServicePage(false)}>Cancel</Button>
              <Button onClick={handleSaveService}>Save</Button>
            </div>
          </div>
        </>
      )}

      {/* Category Modal */}
      {showCategoryModal && (
        <Dialog open onOpenChange={() => setShowCategoryModal(false)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Category</DialogTitle>
            </DialogHeader>
            <Input
              placeholder="Category Name"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
            />
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setShowCategoryModal(false)}>Cancel</Button>
              <Button onClick={handleAddCategory}>Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Sub-category Modal */}
      {showSubCategoryModal.visible && (
        <Dialog open onOpenChange={() => setShowSubCategoryModal({ visible: false, category: '' })}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add Sub-Category for {showSubCategoryModal.category}</DialogTitle>
            </DialogHeader>
            <Input
              placeholder="Sub-category Name"
              value={subCategoryInput}
              onChange={(e) => setSubCategoryInput(e.target.value)}
            />
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={() => setShowSubCategoryModal({ visible: false, category: '' })}>Cancel</Button>
              <Button onClick={handleAddSubCategory}>Save</Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Service;
