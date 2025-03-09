"use client";
import { useState } from "react";

const PlanPage = () => {
  const [formData, setFormData] = useState<any>({});
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
        ? [...(formData[name] || []), value]
        : formData[name].filter((val: string) => val !== value),
    });
  };

  // This function adds a new competitor input field
  function addCompetitor() {
    const competitorsContainer = document.getElementById(
      "competitors-container"
    );

    const newCompetitorGroup = document.createElement("div");
    newCompetitorGroup.classList.add("competitor-group");

    const inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.name = "competitors[]";
    inputElement.placeholder = "Enter competitor name";

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.classList.add("remove-competitor");
    removeButton.innerText = "Remove";
    removeButton.onclick = function () {
      removeCompetitor(removeButton);
    };

    newCompetitorGroup.appendChild(inputElement);
    newCompetitorGroup.appendChild(removeButton);

    competitorsContainer?.appendChild(newCompetitorGroup);
  }

  // This function removes a competitor input field
  function removeCompetitor(button: any) {
    const competitorGroup = button.closest(".competitor-group");
    competitorGroup.remove();
  }

  const addSocialMedia = () => {
    setFormData({
      ...formData,
      social_media: [...(formData.social_media || []), ""],
    });
  };

  const removeSocialMedia = (index: number) => {
    setFormData({
      ...formData,
      social_media: formData.social_media.filter(
        (_: any, i: number) => i !== index
      ),
    });
  };

  return (
    <div className="p-4">
      <div className="header-plan">
        <h1 className="text-3xl font-bold">Fill Campaign Brief</h1>
        <p>
          Tell us a little about your brand and campaign objectives so that we
          can create an effective plan.
        </p>
      </div>
      <div className="progress text-xl text-yellow-600">⏳ Complete it</div>

      <form id="campaign-form" className="space-y-6">
        {/* About The Brand */}
        <div
          className="accordion"
          onClick={() => toggleDropdown("about-brand")}
        >
          <i className="fas fa-lightbulb"></i>
          <span>About The Brand</span>
          <i
            className={`chevron fas fa-chevron-down ${
              activeAccordion === "about-brand" ? "rotate-180" : ""
            }`}
          ></i>
        </div>
        <div
          className={`dropdown-container-plan ${
            activeAccordion === "about-brand" ? "block" : "hidden"
          }`}
        >
          <div className="form-group">
            <label htmlFor="email">
              <strong>Email ID:</strong>
            </label>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              className="border p-2 w-full"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="brand-name">
              <strong>Brand Name:</strong>
            </label>
            <input
              type="text"
              name="brand_name"
              onChange={handleInputChange}
              className="border p-2 w-full"
              placeholder="Enter your brand name"
            />
          </div>

          {/* Sales Channel */}
          <div className="form-group checkbox-container">
            <label>
              <strong>Sales Channel:</strong>
            </label>
            <div>
              <input
                type="checkbox"
                name="sales_channel"
                value="App"
                onChange={handleCheckboxChange}
              />
              <label>App</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="sales_channel"
                value="Website"
                onChange={handleCheckboxChange}
              />
              <label>Website</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="sales_channel"
                value="Offline"
                onChange={handleCheckboxChange}
              />
              <label>Offline</label>
            </div>
          </div>

          {/* Social Media */}
          <div className="form-group">
            <label>
              <strong>Social Media Links:</strong>
            </label>
            <div id="social-media-container">
              {formData.social_media?.map((_: any, index: number) => (
                <div
                  key={index}
                  className="social-media-group flex items-center space-x-2"
                >
                  <input
                    type="text"
                    name="social_media[]"
                    value={formData.social_media[index]}
                    onChange={(e) => {
                      const newSocialMedia = [...formData.social_media];
                      newSocialMedia[index] = e.target.value;
                      setFormData({
                        ...formData,
                        social_media: newSocialMedia,
                      });
                    }}
                    placeholder="Enter social media link (e.g., LinkedIn, FB, IG)"
                    className="border p-2 w-3/4"
                  />
                  <button
                    type="button"
                    onClick={() => removeSocialMedia(index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="text-orange-500"
              onClick={addSocialMedia}
            >
              + Add Social Media Link
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="sector">
              <strong>Sector:</strong>
            </label>
            <input
              type="text"
              name="sector"
              onChange={handleInputChange}
              className="border p-2 w-full"
              placeholder="Enter your sector"
            />
          </div>

          {/* Competitors */}
          <div className="form-group">
            <label>
              <strong>Competitors:</strong>
            </label>
            <div id="competitors-container">
              {formData.competitors?.map((_: any, index: number) => (
                <div
                  key={index}
                  className="competitor-group flex items-center space-x-2"
                >
                  <input
                    type="text"
                    name="competitors[]"
                    value={formData.competitors[index]}
                    onChange={(e) => {
                      const newCompetitors = [...formData.competitors];
                      newCompetitors[index] = e.target.value;
                      setFormData({ ...formData, competitors: newCompetitors });
                    }}
                    placeholder="Enter competitor name"
                    className="border p-2 w-3/4"
                  />
                  <button
                    type="button"
                    onClick={() => removeCompetitor(index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              className="text-orange-500"
              onClick={addCompetitor}
            >
              + Add Competitor
            </button>
          </div>

          <div className="form-group">
            <label htmlFor="product-description">
              <strong>Describe your product:</strong>
            </label>
            <textarea
              name="product_description"
              onChange={handleInputChange}
              className="border p-2 w-full"
              placeholder="Describe your product"
              rows={4}
            ></textarea>
          </div>

          <div className="button-next-container">
            <button
              type="button"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Next
            </button>
          </div>
        </div>

        {/* Repeat this for other sections */}
        {/* Campaign Details, Target Audience, Media Preferences... */}

        <div className="button-plan-container">
          <button type="submit" className="bg-green-500 text-white p-2 rounded">
            <i className="fas fa-calendar-alt"></i> Request Plan
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlanPage;
